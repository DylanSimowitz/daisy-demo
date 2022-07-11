import { GooglePlacesAutocompleteRequest } from '@daisy-demo/api-interfaces';
import { Body, Controller, Post } from '@nestjs/common';
import { GooglePlacesService } from './google-places.service';

@Controller('google-places')
export class GooglePlacesController {
  constructor(private readonly googlePlacesService: GooglePlacesService) {}

  @Post('autocomplete')
  async getAutocomplete(@Body() { query }: GooglePlacesAutocompleteRequest) {
    return this.googlePlacesService.getAutocomplete(query);
  }
}
