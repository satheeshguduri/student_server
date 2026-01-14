import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class StudentsService {
  constructor(private readonly supabase: SupabaseService) {}

  async findAll() {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('student')
      .select('*')
      .order('id');
    if (error) {
      throw error;
    }
    return data ?? [];
  }

  async findById(id: string) {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('student')
      .select('*')
      .eq('id', id);
    if (error) {
      throw error;
    }
    return data ?? [];
  }
}
