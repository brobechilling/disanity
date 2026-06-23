import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS options preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    
    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing Supabase environment variables');
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // 1. Gọi RPC Postgres để lấy danh sách các booking sắp diễn ra trong vòng 30h
    const { data: bookings, error: fetchError } = await supabase
      .rpc('get_upcoming_bookings')

    if (fetchError) {
      console.error('Error executing get_upcoming_bookings RPC:', fetchError.message);
      throw fetchError;
    }

    const brevoApiKey = Deno.env.get('BREVO_API_KEY')
    const brevoSenderEmail = Deno.env.get('BREVO_SENDER_EMAIL') || 'leminhnhat11a2@gmail.com'

    if (!brevoApiKey) {
      console.error('BREVO_API_KEY is not defined in Supabase secrets');
      return new Response(JSON.stringify({ error: 'BREVO_API_KEY is not set' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const emailResults = [];

    // 2. Lặp qua các booking để gửi mail qua Brevo SMTP/Email API v3
    for (const booking of bookings || []) {
      console.log(`Sending Brevo reminder to ${booking.user_email} for workshop: ${booking.workshop_title}`);

      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': brevoApiKey,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: 'DiSanity Reminders', email: brevoSenderEmail },
          to: [{ email: booking.user_email, name: booking.user_name }],
          subject: `🚨 Nhắc nhở: Sắp đến giờ tham gia Workshop ${booking.workshop_title}!`,
          htmlContent: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; padding: 30px; background-color: #ffffff; color: #1e293b;">
              <div style="text-align: center; margin-bottom: 24px;">
                <h1 style="color: #A6341B; font-family: Georgia, serif; margin: 0; font-size: 28px; letter-spacing: 0.05em;">DiSanity</h1>
                <p style="color: #64748b; font-size: 14px; margin-top: 5px; font-weight: 500;">Hành Trình Di Sản Gốm Việt</p>
              </div>
              
              <hr style="border: none; border-top: 1px solid #f1f5f9; margin-bottom: 24px;" />
              
              <p style="font-size: 16px; line-height: 24px;">
                Xin chào <strong>${booking.user_name}</strong>,
              </p>
              <p style="font-size: 15px; line-height: 24px; color: #475569;">
                Đây là thư nhắc nhở lịch trình trải nghiệm làm gốm của bạn tại <strong>Làng gốm Thanh Hà</strong> sắp bắt đầu trong vòng 30 giờ tới:
              </p>
              
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin: 24px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase; width: 140px;">Workshop</td>
                    <td style="padding: 8px 0; color: #0f172a; font-weight: 600; font-size: 15px;">${booking.workshop_title}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase;">Ngày diễn ra</td>
                    <td style="padding: 8px 0; color: #A6341B; font-weight: bold; font-size: 15px;">${booking.workshop_date}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase;">Địa điểm</td>
                    <td style="padding: 8px 0; color: #475569; font-size: 14px;">${booking.location}</td>
                  </tr>
                </table>
              </div>
              
              <p style="font-size: 14px; line-height: 22px; color: #64748b;">
                * <em>Lưu ý: Vui lòng chuẩn bị mặt trước giờ trải nghiệm khoảng 15 phút để check-in mã vé QR và có sự chuẩn bị tốt nhất cùng nghệ nhân.</em>
              </p>
              
              <div style="text-align: center; margin-top: 32px;">
                <a href="https://gsjhmfqaxixqeahzuehj.supabase.co/user-calendar" style="background-color: #A6341B; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 30px; font-weight: bold; font-size: 14px; display: inline-block;">
                  Xem Lịch Trình Của Bạn
                </a>
              </div>
              
              <hr style="border: none; border-top: 1px solid #f1f5f9; margin-top: 32px; margin-bottom: 16px;" />
              <p style="font-size: 11px; color: #94a3b8; text-align: center; margin: 0;">
                Email này được gửi tự động bởi DiSanity. Vui lòng không trả lời trực tiếp email này.
              </p>
            </div>
          `,
        }),
      });

      if (res.ok) {
        // Cập nhật trường reminder_sent thành true trong DB
        const { error: updateError } = await supabase
          .from('bookings')
          .update({ reminder_sent: true })
          .eq('booking_id', booking.booking_id);

        if (updateError) {
          console.error(`DB Update failed for ${booking.booking_id}:`, updateError.message);
        }

        emailResults.push({ id: booking.booking_id, status: 'success' });
      } else {
        const errorText = await res.text();
        console.error(`Failed to send email for booking ${booking.booking_id}:`, errorText);
        emailResults.push({ id: booking.booking_id, status: 'failed', error: errorText });
      }
    }

    return new Response(JSON.stringify({ success: true, processed: emailResults }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (err: any) {
    console.error('Execution error:', err.message);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
