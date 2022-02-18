import { Component, Input, OnInit } from '@angular/core';
import { DailyForecastData } from 'src/app/models/forecastdata';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-datacard',
  templateUrl: './datacard.component.html',
  styleUrls: ['./datacard.component.scss'],
})
export class DatacardComponent implements OnInit {
  constructor() {}
  @Input() dailyForecastData: DailyForecastData;
  ngOnInit() {}

  displayDate() {
    return new Date(this.dailyForecastData.dt * 1000);
  }
  displayTemprature() {
    return Math.round(this.dailyForecastData.temp.day - 273);
  }
  displayHumidity() {
    return this.dailyForecastData.humidity;
  }
  displayWindSpeed() {
    return this.dailyForecastData.wind_speed;
  }
  displayPressure() {
    return this.dailyForecastData.pressure;
  }
  IconSource() {
    return `${environment.ICON_URL}${this.dailyForecastData.weather[0].icon}@2x.png`;
  }
}
