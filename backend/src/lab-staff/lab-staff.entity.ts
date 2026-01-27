import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'lab_staff' })
export class LabStaff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  first_name: string;

  @Column({ length: 100, nullable: true })
  middle_name: string;

  @Column({ length: 100 })
  last_name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 20 })
  phone_number: string;

  @Column({ length: 20, nullable: true })
  alternate_phone_number: string;

  @Column({ length: 255 })
  address_line_1: string;

  @Column({ length: 255, nullable: true })
  address_line_2: string;

  @Column({ length: 100 })
  city: string;

  @Column({ length: 100 })
  country_state: string;

  @Column({ length: 100 })
  country: string;

  @Column({ length: 100 })
  postal_code: string;

  @Column({ type: 'text' })
  role: string;

  @Column({ type: 'text' })
  password: string;
}
