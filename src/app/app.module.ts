// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryData }               	 from './shared/utils/in-memory-data';

// Angular modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

// App imports
import { AppComponent }  from './app.component';
import { AppRoutingService } from './shared/services/app-routing.service';
import { ChartDetailModule } from './routes/chart-detail/chart-detail.module';
import { CollectionDetailModule } from './routes/collection-detail/collection-detail.module';
import { DashboardModule } from './routes/dashboard/dashboard.module';
import { ExternalService } from "./shared/services/external.service";
import { ChartsNavModule } from "./charts-nav/charts-nav.module";
import { ROUTING, ROUTES_DICT }        from './app.routing';
import { SamplesModule } from './routes/samples/samples.module';
import { SiteMapModule } from "./shared/site-map/site-map.module";
import { UserDataService } from "./shared/services/user-data.service";





@NgModule({
  imports: [
    BrowserModule,
    HttpModule,

    ChartDetailModule,
    ChartsNavModule,
    CollectionDetailModule,
    DashboardModule,
    ROUTING,
    SamplesModule,
    SiteMapModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    AppRoutingService,
    ExternalService,
    UserDataService,
    {provide: 'ROUTES_DICT', useValue: ROUTES_DICT},
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryData }     // in-mem server data
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
