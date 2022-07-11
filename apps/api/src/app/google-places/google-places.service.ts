import { Injectable } from '@nestjs/common';
import * as Google from '@googlemaps/google-maps-services-js';
import { GooglePlacesAutocompleteResponse } from '@daisy-demo/api-interfaces';

@Injectable()
export class GooglePlacesService {
  private client: Google.Client;

  constructor() {
    this.client = new Google.Client();
  }

  /*
   *
   * Need to use two API calls to the Maps API
   * First call retrieves descriptions and place_ids
   * Second call uses place_ids to get address_components (more reliable than parsing from description)
   *
   * */
  async getAutocomplete(
    input: string
  ): Promise<GooglePlacesAutocompleteResponse[]> {
    const places = await this.client
      .placeAutocomplete({
        params: {
          input,
          key: process.env.MAPS_API_KEY,
        },
      })
      .then(({ data }) =>
        data.predictions.map(({ place_id, description }) => ({
          place_id,
          description,
        }))
      );

    // Concurrently retrieve address_components for all places using place_id
    return Promise.all(
      places.map(async ({ place_id, description }) =>
        this.client
          .placeDetails({
            params: {
              place_id,
              key: process.env.MAPS_API_KEY,
            },
          })
          .then(({ data }) => ({
            place_id,
            description,
            address_components: data.result.address_components,
          }))
      )
    );
  }
}
