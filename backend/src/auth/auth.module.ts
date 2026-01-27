import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LabStaff } from '../lab-staff/lab-staff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LabStaff])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
