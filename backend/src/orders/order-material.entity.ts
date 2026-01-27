import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order_materials')
export class OrderMaterial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_id: string;

  @Column()
  material_key: string;

  @Column('text')
  material_value: string;
}
