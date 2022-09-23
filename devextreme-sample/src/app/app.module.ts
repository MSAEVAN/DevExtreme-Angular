import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxBulletModule, DxDataGridModule, DxTemplateModule } from 'devextreme-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
