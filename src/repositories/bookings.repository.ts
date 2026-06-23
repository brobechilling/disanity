import { supabase } from '@/lib/supabase/client';
import { ConfirmedBookingItem } from '@/context/BookingContext';

export const bookingsRepository = {
  /**
   * Lưu một đơn đặt chỗ mới vào Database Supabase
   */
  async createBooking(booking: ConfirmedBookingItem, userId: string): Promise<void> {
    const { error } = await supabase
      .from('bookings')
      .insert({
        booking_id: booking.bookingId,
        user_id: userId,
        workshop_id: booking.workshopId,
        title: booking.title,
        price: booking.price,
        unit_price_text: booking.unitPriceText,
        img: booking.img,
        qty: booking.qty,
        genre: booking.genre,
        type: booking.type,
        location: booking.location,
        artisan: booking.artisan,
        duration: booking.duration,
        date: booking.date,
        confirmed_at: booking.confirmedAt,
      });

    if (error) {
      console.error('Error inserting booking:', error.message);
      throw error;
    }
  },

  /**
   * Lấy toàn bộ danh sách đặt chỗ của người dùng theo userId
   */
  async getBookingsByUserId(userId: string): Promise<ConfirmedBookingItem[]> {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('user_id', userId)
      .order('confirmed_at', { ascending: false });

    if (error) {
      console.error('Error fetching bookings:', error.message);
      throw error;
    }

    if (!data) return [];

    // Map dữ liệu từ database trả về khớp với kiểu ConfirmedBookingItem ở frontend
    return data.map((row) => ({
      id: Number(row.booking_id.split('-').pop()) || 0, // Dùng số cuối cùng của bookingId hoặc 0
      bookingId: row.booking_id,
      workshopId: row.workshop_id,
      title: row.title,
      price: Number(row.price),
      unitPriceText: row.unit_price_text || '',
      img: row.img || '',
      qty: row.qty,
      genre: row.genre || '',
      type: row.type || '',
      location: row.location || '',
      artisan: row.artisan || '',
      duration: row.duration || '',
      date: row.date || '',
      confirmedAt: row.confirmed_at,
    }));
  }
};
