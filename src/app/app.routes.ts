import { provideRouter, RouterConfig }  from '@angular/router';

import * as ROUTES_LABELS from './app.route-labels'
import { SamplesComponent } from './routes/samples/samples.component'
import { NewChartComponent } from './routes/new-chart/new-chart.component'
import { LabComponent } from './routes/lab/lab.component'

export const ROUTES_DICT: {[name: string] : string} = {
  LAB: ROUTES_LABELS.LAB,
  NEW_CHART: ROUTES_LABELS.NEW_CHART,
  SAMPLES: ROUTES_LABELS.SAMPLES
  };

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: ROUTES_LABELS.SAMPLES,
    pathMatch: 'full'
  },
  {
    path: ROUTES_LABELS.LAB,
    component: LabComponent,
  },
  {
    path: ROUTES_LABELS.SAMPLES,
    component: SamplesComponent,
  },
  {
    path: ROUTES_LABELS.NEW_CHART,
    component: NewChartComponent,
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
