import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grocery } from 'src/Model/grocery.entity';

@Module({
  imports :[ TypeOrmModule.forFeature([Grocery])],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
