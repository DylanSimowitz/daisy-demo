import { Module } from '@nestjs/common';
import { GooglePlacesService } from './google-places.service';
import { GooglePlacesController } from './google-places.controller';

@Module({
  controllers: [GooglePlacesController],
  providers: [GooglePlacesService],
})
export class GooglePlacesModule {}
