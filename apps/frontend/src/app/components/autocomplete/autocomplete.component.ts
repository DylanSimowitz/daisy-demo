import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Option from './Option';

@Component({
  selector: 'daisy-demo-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  @Input()
  set options(value: Option[]) {
    this.items = value;
  }
  get options() {
    return this.items;
  }

  @Input() placeholder?: string = 'Select';
  @Input() search = true;
  @Input() customSearch?: (value: string) => void;
  @Output() openEvent = new EventEmitter<boolean>();
  @Output() selectEvent = new EventEmitter<Option>();
  @Output() focusEvent = new EventEmitter<boolean>();
  @Output() changeEvent = new EventEmitter<string>();

  items: Option[] = this.options;
  private _isOpen = false;
  private _text = '';
  private _selected?: Option;

  ngOnInit(): void {
    this.items = this.options;
    this._search = this.customSearch ? this.customSearch : this._search;
  }

  get isOpen() {
    return this._isOpen;
  }
  set isOpen(value: boolean) {
    this._isOpen = value;
    this.openEvent.emit(value);
  }

  get selected() {
    return this._selected;
  }
  set selected(value: Option | undefined) {
    this._selected = value;
    this.selectEvent.emit(value);
  }

  get text() {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
    this.changeEvent.emit(value);
    if (this.search) {
      this._search(value);
    }
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  reset() {
    this._text = '';
    this.items = this.options;
    this.selected = undefined;
  }

  close() {
    this.isOpen = false;
    if (!this._selected) {
      this.reset();
      return;
    }
    this._text = this._selected.value;
    this.focusEvent.emit(false);
  }

  setSelected(item: Option) {
    this.selected = item;
    this.isOpen = false;
    this.text = item.label;
  }

  _search(value: string) {
    if (this.search) {
      const query = new RegExp(`^${value}`);
      this.items = this.options.filter((option) => {
        return query.test(option.label);
      });
    }
  }
}
