import { AddressComponent } from '@googlemaps/google-maps-services-js';

export class GooglePlacesAutocompleteRequest {
  query: string;
}

export class GooglePlacesAutocompleteResponse {
  description: string;
  place_id: string;
  address_components: AddressComponent[];
}
