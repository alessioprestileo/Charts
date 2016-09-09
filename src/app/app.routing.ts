import { Routes, RouterModule } from '@angular/router';

import * as ROUTING_LABELS from './app.routing-labels'

import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { LabComponent } from './routes/lab/lab.component';
import { NewChartComponent } from './routes/new-chart/new-chart.component';
import { SamplesComponent } from './routes/samples/samples.component';

export const ROUTES_DICT: {[name: string] : string} = {
  CHARTS: ROUTING_LABELS.CHARTS,
  DASHBOARD: ROUTING_LABELS.DASHBOARD,
  HOME: ROUTING_LABELS.HOME,
  LAB: ROUTING_LABELS.LAB,
  MY_CV: ROUTING_LABELS.MY_CV,
  NEW_CHART: ROUTING_LABELS.NEW_CHART,
  PROJECTS: ROUTING_LABELS.PROJECTS,
  SAMPLES: ROUTING_LABELS.SAMPLES,
  WAREHOUSE: ROUTING_LABELS.WAREHOUSE,
  WHO_AM_I: ROUTING_LABELS.WHO_AM_I,
  };

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: ROUTING_LABELS.DASHBOARD,
    pathMatch: 'full',
  },
  {
    path: ROUTING_LABELS.DASHBOARD,
    component: DashboardComponent,
  },
  {
    path: ROUTING_LABELS.LAB,
    component: LabComponent,
  },
  {
    path: ROUTING_LABELS.SAMPLES,
    component: SamplesComponent,
  },
  {
    path: ROUTING_LABELS.NEW_CHART,
    component: NewChartComponent,
  }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
