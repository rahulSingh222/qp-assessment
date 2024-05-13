import { Controller, Query } from '@nestjs/common';
import { Get,Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { Grocery } from 'src/Model/grocery.entity';

interface GroceryItemList {
    itemName : string
}

@Controller('user')
export class UserController {

    constructor(private userService : UserService) {}

    @Get()
    getGroceryList(){
       //- View the list of available grocery items
       return this.userService.getGroceryList();
    }

    @Post()
    bookGrocery(@Body() body : GroceryItemList[] , @Query('userName') user :  string){
        //- Ability to book multiple grocery items in a single order
        return this.userService.bookGrocery(user, body);
    }
}
