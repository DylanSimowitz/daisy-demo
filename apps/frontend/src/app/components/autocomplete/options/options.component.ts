import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Option from './Option';

@Component({
  selector: 'daisy-demo-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  @Input() options!: Option[];
  @Input() placeholder?: string = 'Select';
  @Output() openEvent = new EventEmitter<boolean>();
  @Output() selectEvent = new EventEmitter<Option>();
  @Output() focusEvent = new EventEmitter<boolean>();

  items: Option[] = this.options;
  private _isOpen = false;
  private _text = '';
  private _selected?: Option;

  ngOnInit(): void {
    this.items = this.options;
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
    this.search(value);
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
    this._text = this._selected.label;
    this.focusEvent.emit(false);
  }

  setSelected(item: Option) {
    this.selected = item;
    this.isOpen = false;
    this.text = item.label;
  }

  search(value: string) {
    const query = new RegExp(`^${value}`);
    this.items = this.options.filter((option) => {
      return query.test(option.label);
    });
  }
}
