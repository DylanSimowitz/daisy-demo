import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Subject } from 'rxjs';
import { AutocompleteService } from '../../services/autocomplete.service';
import Option from '../autocomplete/Option';

@Component({
  selector: 'daisy-demo-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  results: Option[] = [];
  keyChange = new Subject<string>();
  selectChange = new Subject<Option>();

  constructor(private autocomplete: AutocompleteService) {}

  ngOnInit(): void {
    this.keyChange
      .pipe(
        filter((value) => value.length > 2),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((query: string) => {
        this.autocomplete.getResults({ query }).subscribe((results) => {
          this.results = results;
        });
      });
  }
}
