import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order_files')
export class OrderFile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_id: string;

  @Column()
  file_type: string;

  @Column('text')
  file_name: string;
}
