
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LabSpecialtyService } from './lab-specialty.service';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';

@Controller('specialties')
export class LabSpecialtyController {
  constructor(private readonly svc: LabSpecialtyService) {}

  @Post()
  create(@Body() dto: CreateSpecialtyDto) {
    return this.svc.create(dto);
  }

  @Get()
  findAll() {
    return this.svc.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.svc.findOne(+id);
  }
}
