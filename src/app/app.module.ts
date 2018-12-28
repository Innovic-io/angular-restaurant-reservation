import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputFirstLastComponent } from './form-comp/input-first-last/input-first-last.component';
import { FormCompComponent } from './form-comp/form-comp.component';
import { SelectListComponent } from './form-comp/select-list/select-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFirstLastComponent,
    FormCompComponent,
    SelectListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
