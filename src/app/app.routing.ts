import { Routes, RouterModule } from '@angular/router';

import * as ROUTING_LABELS from './app.routing-labels'

import { ChartDetailComponent } from './routes/chart-detail/chart-detail.component';
import { CollectionDetailComponent } from './routes/collection-detail/collection-detail.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { SamplesComponent } from './routes/samples/samples.component';

export const ROUTES_DICT: {[name: string] : string} = {
  CHARTS: ROUTING_LABELS.CHARTS,
  CHARTS_DETAIL: ROUTING_LABELS.CHARTS_DETAIL,
  COLLECTIONS_DETAIL: ROUTING_LABELS.COLLECTIONS_DETAIL,
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
    path: ROUTING_LABELS.CHARTS_DETAIL,
    children: [
      {
        path: '',
        redirectTo: 'New',
        pathMatch: 'full',
      },
      {
        path: 'New',
        component: ChartDetailComponent,
      },
      {
        path: ':id',
        component: ChartDetailComponent,
      },
    ]
  },
  {
    path: ROUTING_LABELS.COLLECTIONS_DETAIL,
    children: [
      {
        path: '',
        redirectTo: 'New',
        pathMatch: 'full',
      },
      {
        path: 'New',
        component: CollectionDetailComponent,
      },
      {
        path: ':id',
        component: CollectionDetailComponent,
      },
    ]
  },
  {
    path: ROUTING_LABELS.SAMPLES,
    component: SamplesComponent,
  },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
