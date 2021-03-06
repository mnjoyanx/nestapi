import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://mnjoyan:tikotiko9929@cluster0.1bwis.mongodb.net/nest',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
