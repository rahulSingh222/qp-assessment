import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grocery } from 'src/Model/grocery.entity';
import { Order } from 'src/Model/order-item.entity';

interface GroceryItemList {
  itemName: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Grocery) private groceryRepo: Repository<Grocery>,
    @InjectRepository(Order) private orderRepo: Repository<Order>,
  ) {}

  //return only items which are available
  async getGroceryList() {
    // filter out items which have quatity more than 1
    const itemList = await this.groceryRepo.query(
      'SELECT * FROM grocery WHERE quantity > 0',
    );
    return itemList;
  }

  //book order items by user
  async bookGrocery(userName: string, groceryItemsList: GroceryItemList[]) {
    const booked: string[] = [];

    //create entity for each order items
    const orderItems = groceryItemsList.map((item) => {
      booked.push(item.itemName);
      return this.orderRepo.create({ userName, bookedItem: item.itemName });
    });

    //save all order items in order table
    await this.orderRepo.save(orderItems);

    //return booked items
    return booked;
  }
}
