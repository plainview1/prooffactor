import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipListComponent } from './tooltip-list/tooltip-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    TooltipListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
