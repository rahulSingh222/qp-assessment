import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Grocery {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string 

    @Column()
    price : number

    @Column()
    quantity : number
}