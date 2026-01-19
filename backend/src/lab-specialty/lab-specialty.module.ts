
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabSpecialtyService } from './lab-specialty.service';
import { LabSpecialtyController } from './lab-specialty.controller';
import { Specialty } from './specialty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Specialty])],
  providers: [LabSpecialtyService],
  controllers: [LabSpecialtyController],
  exports: [TypeOrmModule],
})
export class LabSpecialtyModule {}
