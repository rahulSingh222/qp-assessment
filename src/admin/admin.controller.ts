import { Controller, Post, Body, Get, Param, Query, Delete, Patch } from '@nestjs/common';
import { GroceryDto } from 'src/DTOs/grocery.dto';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {

    constructor( private adminService :  AdminService){}

    // - Add new grocery items to the system
    @Post()
    addGroceryItem(@Body() body : GroceryDto ){
        return this.adminService.addGroceryItem(body);
    }

    // - View existing grocery items
    @Get()
    getGroceryList(){
       return this.adminService.getGroceryList();
    }

    // - Remove grocery items from the system
    @Delete(':id')
    removeGroceryItem(@Param('id') id : string) {
        return this.adminService.removeGroceryItem(parseInt(id));
    }

    // - Update details (e.g., name, price) of existing gr
    @Patch(':id')
    updateGroceryInventory(@Param('id') id : string, @Body() body :  GroceryDto){
         return this.adminService.updateGroceryInventory( parseInt(id), body)
    }
}
