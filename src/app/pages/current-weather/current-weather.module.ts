import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentWeatherPageRoutingModule } from './current-weather-routing.module';

import { CurrentWeatherPage } from './current-weather.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CurrentWeatherPageRoutingModule,
  ],
  declarations: [CurrentWeatherPage],
})
export class CurrentWeatherPageModule {}
