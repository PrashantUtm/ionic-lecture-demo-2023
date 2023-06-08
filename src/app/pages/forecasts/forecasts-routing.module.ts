import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForecastsPage } from './forecasts.page';

const routes: Routes = [
  {
    path: '',
    component: ForecastsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForecastsPageRoutingModule {}
