import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getAllOrders() {
    return {
      success: true,
      data: await this.ordersService.getOrders(),
    };
  }

    @Get('orderInfo')
  async getOrderInfo(@Query("order_id") order_id:string) {
    return {
      success: true,
      data: await this.ordersService.getOrderInfo(order_id),
    };
  }
}
