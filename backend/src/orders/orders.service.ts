import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { OrderFile } from './order-file.entity';
import { OrderMaterial } from './order-material.entity';
import { OrderBilling } from './order-billing.entity';
import { OrderShipping } from './order-shipping.entity';


@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>,
        @InjectRepository(OrderFile)
    private fileRepo: Repository<OrderFile>,

    @InjectRepository(OrderMaterial)
    private materialRepo: Repository<OrderMaterial>,

    @InjectRepository(OrderBilling)
    private billingRepo: Repository<OrderBilling>,

    @InjectRepository(OrderShipping)
    private shippingRepo: Repository<OrderShipping>,
  ) {}
  async getOrders() {
    return this.orderRepo.find({
      select: [
        'order_id',
        'clinic_id',
        'doctor_id',
        'patient_id',
        'case_type',
        'shade',
        'tooth_numbers',
        'priority',
        'status',
        'order_date',
        'expected_delivery',
        'design_notes',

      ],
    });
  }

   async getOrderInfo(order_id: string) {
    const order = await this.orderRepo.findOne({
      where: { order_id },
    });
    
    if (!order) {
      throw new NotFoundException('Order not found');
    }

    const files = await this.fileRepo.find({ where: { order_id } });
    const materials = await this.materialRepo.find({ where: { order_id } });
    const billing = await this.billingRepo.findOne({ where: { order_id } });
    const shipping = await this.shippingRepo.findOne({ where: { order_id } });

    return {
      order,
      files,
      materials,
      billing,
      shipping,
    };
  }
}
