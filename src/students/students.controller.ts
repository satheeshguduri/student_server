import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { StudentsService } from './students.service';
import { StudentDto } from './dto/student.dto';

@ApiTags('students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  @ApiOkResponse({ type: StudentDto, isArray: true })
  async list() {
    return await this.studentsService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiOkResponse({ type: StudentDto, isArray: true })
  async getById(@Param('id') id: string) {
    return await this.studentsService.findById(id);
  }
}
