import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatacardComponent } from './datacard/datacard.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [DatacardComponent],
  imports: [CommonModule, IonicModule],
  exports: [DatacardComponent],
})
export class SharedModule {}
