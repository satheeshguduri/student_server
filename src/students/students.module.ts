import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { SupabaseService } from '../supabase/supabase.service';

@Module({
  imports: [ConfigModule],
  controllers: [StudentsController],
  providers: [StudentsService, SupabaseService],
})
export class StudentsModule {}
