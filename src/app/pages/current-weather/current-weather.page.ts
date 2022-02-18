import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ForecastData } from 'src/app/models/forecastdata';
import { ForecastService } from 'src/app/services/forecast.service';
import { LoadingService } from 'src/app/services/loading.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.page.html',
  styleUrls: ['./current-weather.page.scss'],
})
export class CurrentWeatherPage implements OnInit {
  forecastData: ForecastData;

  constructor(
    private forecastService: ForecastService,
    private loadingService: LoadingService,
    private menu: MenuController
  ) {}

  openMenu() {
    this.menu.enable(true, 'menu');
    this.menu.open('menu');
  }
  closeMenu() {
    this.menu.close('menu');
  }
  toggleTheme(event) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

  async ngOnInit() {
    this.forecastService
      .getForecastData()
      .subscribe((apiResponse: ForecastData) => {
        this.forecastData = apiResponse;
        this.loadingService.dismissLoader();
      });
    this.loadingService.startLoader();
  }
  showTemprature() {
    return Math.round(this.forecastData.daily[0].temp.day - 273);
  }
  IconSource() {
    return `${environment.ICON_URL}${this.forecastData.daily[0].weather[0].icon}@2x.png`;
  }
}
