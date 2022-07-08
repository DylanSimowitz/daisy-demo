import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from './components/autocomplete/options/options.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, CommonModule],
  declarations: [
    OptionsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
