
import {
  Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, Index,
} from 'typeorm';
import { Specialty } from '../lab-specialty/specialty.entity';

@Entity({ name: 'lab_staff' })
@Index('UQ_lab_staff_email', ['email'], { unique: true }) // mirrors UNIQUE in DB
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', type: 'varchar', length: 100 })
  firstName: string;

  @Column({ name: 'middle_name', type: 'varchar', length: 100, nullable: true })
  middleName?: string;

  @Column({ name: 'last_name', type: 'varchar', length: 100 })
  lastName: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ name: 'phone_number', type: 'varchar', length: 20 })
  phoneNumber: string;

  @Column({ name: 'alternate_phone_number', type: 'varchar', length: 20, nullable: true })
  alternatePhoneNumber?: string;

  @Column({ name: 'address_line_1', type: 'varchar', length: 255 })
  addressLine1: string;

  @Column({ name: 'address_line_2', type: 'varchar', length: 255, nullable: true })
  addressLine2?: string;

  @Column({ type: 'varchar', length: 100 })
  city: string;

  @Column({ name: 'country_state', type: 'varchar', length: 100 })
  countryState: string;

  @Column({ type: 'varchar', length: 100 })
  country: string;

  @Column({ name: 'postal_code', type: 'varchar', length: 100 })
  postalCode: string;

  // Many-to-many using existing join table with exact names
  @ManyToMany(() => Specialty, (specialty) => specialty.staff, {
    cascade: false, // keep explicit to avoid unintended writes
  })
  @JoinTable({
    name: 'lab_staff_specialties',
    joinColumn: { name: 'staff_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'specialty_id', referencedColumnName: 'id' },
  })
  specialties: Specialty[];
}
``
