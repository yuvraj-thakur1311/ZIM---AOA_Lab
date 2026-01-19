
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Staff } from '../lab-staff/staff.entity';

@Entity({ name: 'lab_specialties' })
export class Specialty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @ManyToMany(() => Staff, (staff) => staff.specialties)
  staff: Staff[];
}