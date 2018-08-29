import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatiPersonaliPage } from './dati-personali';

@NgModule({
  declarations: [
    DatiPersonaliPage,
  ],
  imports: [
    IonicPageModule.forChild(DatiPersonaliPage),
  ],
})
export class DatiPersonaliPageModule {}
