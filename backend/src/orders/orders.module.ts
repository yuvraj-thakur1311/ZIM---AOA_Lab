import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

import { Order } from './order.entity';
import { OrderFile } from './order-file.entity';
import { OrderMaterial } from './order-material.entity';
import { OrderBilling } from './order-billing.entity';
import { OrderShipping } from './order-shipping.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrderFile,
      OrderMaterial,
      OrderBilling,
      OrderShipping,
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
