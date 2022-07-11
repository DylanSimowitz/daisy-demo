import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ClickOutsideDirective } from './directives/clickoutside.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './components/address/address.component';
import { AutocompleteService } from './services/autocomplete.service';
import { AddressformComponent } from './components/addressform/addressform.component';
import { StateSelectComponent } from './components/state-select/state-select.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    AddressComponent,
    AutocompleteComponent,
    AddressformComponent,
    StateSelectComponent,
  ],
  providers: [AutocompleteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
