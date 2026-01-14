import { SupabaseService } from '../supabase/supabase.service';
export declare class StudentsService {
    private readonly supabase;
    constructor(supabase: SupabaseService);
    findAll(): Promise<any[]>;
    findById(id: string): Promise<any[]>;
}
