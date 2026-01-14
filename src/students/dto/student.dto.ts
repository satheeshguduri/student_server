import { ApiProperty } from '@nestjs/swagger';

export class StudentDto {
  @ApiProperty({ example: 101, description: 'Primary key' })
  id!: number;

  @ApiProperty({ example: '2026-01-14T09:24:10.534878+00:00' })
  created_at!: string;

  @ApiProperty({ example: 'satheesh' })
  name!: string;

  @ApiProperty({ example: 'hyderabad' })
  address!: string;
}
