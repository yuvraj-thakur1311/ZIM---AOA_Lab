import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LabStaff } from '../lab-staff/lab-staff.entity';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(LabStaff)
    private readonly staffRepo: Repository<LabStaff>,
  ) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // 1. Find user by email
    const user = await this.staffRepo.findOne({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // 2. Compare password (PLAIN TEXT – BASIC AUTH)
    if (user.password !== password) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // 3. Remove password before sending response
    const { password: _, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }
}
