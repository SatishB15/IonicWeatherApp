import { Component, OnInit } from '@angular/core';
import { DailyForecastData } from 'src/app/models/forecastdata';
import { ForecastService } from 'src/app/services/forecast.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit {
  dailyData: DailyForecastData[];

  constructor(
    private forecastService: ForecastService,
    private loadingService: LoadingService
  ) {}

  async ngOnInit() {
    this.loadingService.startLoader();
    this.forecastService.getForecastData().subscribe(
      (apiResponse) => {
        this.dailyData = apiResponse.daily;
        console.log(this.dailyData);
      },
      (error) => {
        this.loadingService.dismissLoader();
      }
    );
  }
}
