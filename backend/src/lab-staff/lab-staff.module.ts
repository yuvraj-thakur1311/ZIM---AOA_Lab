
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabStaffService } from './lab-staff.service';
import { LabStaffController } from './lab-staff.controller';
import { Staff } from './staff.entity';
import { Specialty } from '../lab-specialty/specialty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Staff, Specialty])],
  providers: [LabStaffService],
  controllers: [LabStaffController],
})
export class LabStaffModule {}
