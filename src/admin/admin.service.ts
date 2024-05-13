import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { GroceryDto } from 'src/DTOs/grocery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grocery } from 'src/Model/grocery.entity';

@Injectable()
export class AdminService {

    constructor(@InjectRepository(Grocery) private repo : Repository<Grocery>){}

    //add new grocery item
    async addGroceryItem( body : GroceryDto ) : Promise<Grocery>{
        const item = { ...body};      
        const entity =  await this.repo.create(item);
        return this.repo.save(entity);
     }

    //get list of all items 
    getGroceryList(){
       return this.repo.find();
     }

    //remove grocery item
    async removeGroceryItem( id : number) {
        const item = await this.repo.findOneBy({id});
        if(!item){
            throw new NotFoundException("Item not found");
        }
        return this.repo.remove(item);
    }

    //update grocery item
    async updateGroceryInventory( id : number, newItem :   GroceryDto){
        const item = await this.repo.findOneBy({id});
        if(!item){
            throw new NotFoundException("Item not found");
        }
        const groceryItem = this.repo.create({ id, ...newItem});
        return this.repo.save(groceryItem);
    }
}
