
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Specialty } from './specialty.entity';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';

@Injectable()
export class LabSpecialtyService {
  constructor(
    @InjectRepository(Specialty) private readonly repo: Repository<Specialty>,
  ) {}

  create(dto: CreateSpecialtyDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ order: { name: 'ASC' } });
  }

  async findOne(id: number) {
    const sp = await this.repo.findOne({ where: { id } });
    if (!sp) throw new NotFoundException('Specialty not found');
    return sp;
  }
}