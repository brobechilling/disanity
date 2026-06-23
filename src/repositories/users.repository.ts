import { supabase } from '@/lib/supabase/client';

export interface DBUser {
  id: string;
  email: string;
  name: string;
  picture?: string;
  address?: string;
  phone?: string;
  role?: string;
  created_at?: string;
}

export const usersRepository = {
  /**
   * Lấy thông tin chi tiết của user theo ID
   */
  async getUserById(id: string): Promise<DBUser | null> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching user:', error.message);
      throw error;
    }

    return data;
  },

  /**
   * Đăng ký hoặc cập nhật cơ bản thông tin user khi đăng nhập bằng Google
   */
  async upsertUser(user: {
    id: string;
    email: string;
    name: string;
    picture: string;
  }): Promise<DBUser> {
    const { data, error } = await supabase
      .from('users')
      .upsert(
        {
          id: user.id,
          email: user.email,
          name: user.name,
          picture: user.picture,
        },
        { onConflict: 'id' }
      )
      .select()
      .single();

    if (error) {
      console.error('Error upserting user:', error.message);
      throw error;
    }

    return data;
  },

  /**
   * Cập nhật thông tin chi tiết từ trang UserAccount
   */
  async updateUserProfile(
    id: string,
    profile: {
      name: string;
      address: string;
      phone: string;
    }
  ): Promise<DBUser> {
    const { data, error } = await supabase
      .from('users')
      .update({
        name: profile.name,
        address: profile.address,
        phone: profile.phone,
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating user profile:', error.message);
      throw error;
    }

    return data;
  }
};
