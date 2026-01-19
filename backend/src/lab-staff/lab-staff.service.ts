
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Staff } from './staff.entity';
import { Specialty } from '../lab-specialty/specialty.entity';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';

@Injectable()
export class LabStaffService {
  constructor(
    @InjectRepository(Staff) private readonly staffRepo: Repository<Staff>,
    @InjectRepository(Specialty) private readonly spRepo: Repository<Specialty>,
  ) {}

  async create(dto: CreateStaffDto) {
    let specialties: Specialty[] = [];
    if (dto.specialtyIds?.length) {
      specialties = await this.spRepo.findBy({ id: In(dto.specialtyIds) });
    }
    const entity = this.staffRepo.create({ ...dto, specialties });
    return this.staffRepo.save(entity);
  }

  findAll() {
    // Load related specialties
    return this.staffRepo.find({
      relations: { specialties: true },
      order: { lastName: 'ASC', firstName: 'ASC' },
    });
  }

  async findOne(id: number) {
    const staff = await this.staffRepo.findOne({
      where: { id },
      relations: { specialties: true },
    });
    if (!staff) throw new NotFoundException('Staff not found');
    return staff;
  }

  async update(id: number, dto: UpdateStaffDto) {
    const staff = await this.findOne(id);

    // Optional: update specialties if provided
    if (dto.specialtyIds) {
      staff.specialties = await this.spRepo.findBy({ id: In(dto.specialtyIds) });
    }

    Object.assign(staff, dto);
    return this.staffRepo.save(staff);
  }

  async remove(id: number) {
    // ON DELETE CASCADE in DB will clear join rows
    const staff = await this.findOne(id);
    await this.staffRepo.remove(staff);
    return { deleted: true };
  }

  // Add a specialty to a staff member
  async addSpecialty(staffId: number, specialtyId: number) {
    const staff = await this.findOne(staffId);
    const sp = await this.spRepo.findOne({ where: { id: specialtyId } });
    if (!sp) throw new NotFoundException('Specialty not found');
    staff.specialties = Array.from(new Set([...(staff.specialties || []), sp]));
    return this.staffRepo.save(staff);
  }

  // Remove a specialty from a staff member
  async removeSpecialty(staffId: number, specialtyId: number) {
    const staff = await this.findOne(staffId);
    staff.specialties = (staff.specialties || []).filter(s => s.id !== specialtyId);
    return this.staffRepo.save(staff);
  }
}
