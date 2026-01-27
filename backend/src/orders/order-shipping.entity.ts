import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('order_shipping')
export class OrderShipping {
  @PrimaryColumn()
  order_id: string;

  @Column()
  method: string;

  @Column('text')
  address: string;

  @Column()
  tracking_number: string;
}
