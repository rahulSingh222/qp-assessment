import { IsNumber, IsString, IsNotEmpty} from "class-validator";
export class GroceryDto {
     
    @IsString()
    @IsNotEmpty()
    name : string

    @IsNumber()
    @IsNotEmpty()
    price : number

    @IsNumber()
    @IsNotEmpty()
    quantity : number
}