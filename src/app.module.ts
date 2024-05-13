import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Grocery } from './Model/grocery.entity';
import { Order } from './Model/order-item.entity';

@Module({
  imports: [UserModule, AdminModule,

    TypeOrmModule.forRoot({
      type : 'sqlite',
      database : 'db.sqlite',
       entities : [Grocery, Order],
       synchronize : false
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
