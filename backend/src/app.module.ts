import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypegooseModule } from 'nestjs-typegoose'
import { getMongoDbConfig } from './config/mongo.config'
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BasketController } from './basket/basket.controller';
import { BasketService } from './basket/basket.service';
import { BasketModule } from './basket/basket.module';
import { ProductsModule } from './products/products.module';
import { json, raw } from 'body-parser'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoDbConfig,
    }),
    AuthModule,
    UserModule,
    BasketModule,
    ProductsModule,
  ],
  controllers: [AppController, BasketController],
  providers: [AppService, BasketService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(json({ limit: '1000mb' }), raw({ limit: '1000mb' }))
      .forRoutes('*')
  }
}
