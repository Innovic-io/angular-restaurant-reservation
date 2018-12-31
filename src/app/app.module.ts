import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputFirstLastComponent } from './form-comp/input-first-last/input-first-last.component';
import { FormCompComponent } from './form-comp/form-comp.component';
import { SelectListComponent } from './form-comp/select-list/select-list.component';
import { CheckComponent } from './form-comp/check/check.component';
import { DonateUsComponent } from './donate-us/donate-us.component';
import { SubmitComponent } from './submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFirstLastComponent,
    FormCompComponent,
    SelectListComponent,
    CheckComponent,
    DonateUsComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
