import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'daisy-demo-addressform',
  templateUrl: './addressform.component.html',
  styleUrls: ['./addressform.component.scss'],
})
export class AddressformComponent implements AfterViewInit {
  addressForm = new FormGroup({
    street: new FormControl(),
    apt: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zipcode: new FormControl(),
  });
  @ViewChild(AddressComponent) addressComponent!: AddressComponent;
  @ViewChild('apt') aptField!: ElementRef;

  ngAfterViewInit(): void {
    this.addressComponent.selectChange.subscribe((selected) => {
      this.addressForm.patchValue({
        ...selected.extra,
      });
      this.aptField.nativeElement.focus();
    });
  }
}
