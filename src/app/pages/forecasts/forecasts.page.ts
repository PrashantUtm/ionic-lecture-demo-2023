import { Component, OnInit } from '@angular/core';
import { Forecast } from 'src/app/models/forecast';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.page.html',
  styleUrls: ['./forecasts.page.scss'],
})
export class ForecastsPage implements OnInit {

  public forecastList: Forecast[] = [
    {
      id: 1,
      date: new Date(),
      region: 'Pointe aux Sables',
      weather: 'Sunny'
    },
    {
      id: 2,
      date: new Date(),
      region: 'Port Louis',
      weather: 'Rainy',
      rainfall: 90
    },
    {
      id: 3,
      date: new Date(),
      region: 'Curepipe',
      weather: 'Cloudy',
      rainfall: 20
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
