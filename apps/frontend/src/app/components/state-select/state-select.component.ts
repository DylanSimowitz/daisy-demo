import { Component } from '@angular/core';
import Option from '../autocomplete/Option';
import statesData from './states.json';

@Component({
  selector: 'daisy-demo-state-select',
  templateUrl: './state-select.component.html',
  styleUrls: ['./state-select.component.scss'],
})
export class StateSelectComponent {
  states: Option[] = statesData.states;
}
