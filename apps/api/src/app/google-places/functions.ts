import { GooglePlacesAutocompleteAddress } from '@daisy-demo/api-interfaces';
import {
  AddressComponent,
  AddressType,
} from '@googlemaps/google-maps-services-js';

export function getAddressComponents(
  components: AddressComponent[]
): GooglePlacesAutocompleteAddress {
  const validTypes = {
    [AddressType.street_number]: 'street_number',
    [AddressType.route]: 'street',
    [AddressType.locality]: 'city',
    [AddressType.administrative_area_level_1]: 'state',
    [AddressType.postal_code]: 'zipcode',
  };

  // Match types exactly
  const validTypesReg = new RegExp(`^${Object.keys(validTypes).join('$|^')}$`);
  return components
    .map((component) => {
      return component.types
        .filter((type) => validTypesReg.test(type))
        .map((type) => {
          return { [validTypes[type]]: component.long_name };
        })[0];
    })
    .reduce((r, c) => Object.assign(r, c), {});
}
