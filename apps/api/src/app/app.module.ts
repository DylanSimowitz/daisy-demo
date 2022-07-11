import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GooglePlacesModule } from './google-places/google-places.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        MAPS_API_KEY: Joi.required(),
      }),
    }),
    GooglePlacesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
