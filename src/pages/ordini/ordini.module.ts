import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdiniPage } from './ordini';

@NgModule({
  declarations: [
    OrdiniPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdiniPage),
  ],
})
export class OrdiniPageModule {}
