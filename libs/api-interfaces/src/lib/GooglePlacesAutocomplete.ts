export type GooglePlacesAutocompleteRequest = {
  query: string;
};

export type GooglePlacesAutocompleteResponse = {
  description: string;
  place_id: string;
  address: GooglePlacesAutocompleteAddress;
}[];

export type GooglePlacesAutocompleteAddress = {
  street_number?: string;
  street?: string;
  city?: string;
  state?: string;
  zipcode?: string;
};
