import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grocery } from 'src/Model/grocery.entity';
import { Order } from 'src/Model/order-item.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Grocery, Order])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
