import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('order_billing')
export class OrderBilling {
  @PrimaryColumn()
  order_id: string;

  @Column()
  payment_status: string;

  @Column('numeric')
  price: number;

  @Column()
  currency: string;
}
