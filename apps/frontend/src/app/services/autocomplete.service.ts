import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  GooglePlacesAutocompleteAddress,
  GooglePlacesAutocompleteRequest,
  GooglePlacesAutocompleteResponse,
} from '@daisy-demo/api-interfaces';
import { map } from 'rxjs';
import Option from '../components/autocomplete/Option';

@Injectable({
  providedIn: 'root',
})
export class AutocompleteService {
  static URL = '/api/google-places';

  constructor(private http: HttpClient) {}

  getResults(req: GooglePlacesAutocompleteRequest) {
    return this.http
      .post<GooglePlacesAutocompleteResponse>(
        `${AutocompleteService.URL}/autocomplete`,
        req
      )
      .pipe(
        map((places) =>
          places.map(
            (place): Option<GooglePlacesAutocompleteAddress> => ({
              value: place.address.street_number
                ? `${place.address.street_number} ${place.address.street}`
                : '',
              label: place.description,
              extra: place.address,
            })
          )
        )
      );
  }
}
