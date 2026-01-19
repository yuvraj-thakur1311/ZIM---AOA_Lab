
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LabStaffService } from './lab-staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';

@Controller('staff')
export class LabStaffController {
  constructor(private readonly svc: LabStaffService) {}

  @Post()
  create(@Body() dto: CreateStaffDto) {
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

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateStaffDto) {
    return this.svc.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.svc.remove(+id);
  }

  @Post(':id/specialties/:specialtyId')
  addSpecialty(@Param('id') id: number, @Param('specialtyId') specialtyId: number) {
    return this.svc.addSpecialty(+id, +specialtyId);
  }

  @Delete(':id/specialties/:specialtyId')
  removeSpecialty(@Param('id') id: number, @Param('specialtyId') specialtyId: number) {
    return this.svc.removeSpecialty(+id, +specialtyId);
  }
}
