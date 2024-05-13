
import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id : number

    @Column() 
    userName :  string

    @Column()
    bookedItem : string 
}