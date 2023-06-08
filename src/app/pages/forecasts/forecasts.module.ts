import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForecastsPageRoutingModule } from './forecasts-routing.module';

import { ForecastsPage } from './forecasts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForecastsPageRoutingModule
  ],
  declarations: [ForecastsPage]
})
export class ForecastsPageModule {}
