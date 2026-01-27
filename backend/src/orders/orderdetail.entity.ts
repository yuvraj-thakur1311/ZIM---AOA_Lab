import {
  Entity,
  Column,
  PrimaryColumn,
} from 'typeorm';

@Entity('orders') // table name in DB
export class OrderDetails {
  
  @PrimaryColumn({ type: 'varchar', length: 20 })
  order_id: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  clinic_id: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  doctor_id: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  patient_id: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  case_type: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  shade: string;

  @Column('int', { array: true, nullable: true })
  tooth_numbers: number[];

  @Column({ type: 'varchar', length: 20, nullable: true })
  priority: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  status: string;

  @Column({ type: 'timestamptz', nullable: true })
  order_date: Date;

  @Column({ type: 'timestamptz', nullable: true })
  expected_delivery: Date;

  @Column({ type: 'text', nullable: true })
  design_notes: string;
}
