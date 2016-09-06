import { Component, OnInit } from '@angular/core';

import { SampleLineChartComponent } from '../../shared/components/sample-line-chart/sample-line-chart.component';
import { SampleBarChartComponent } from '../../shared/components/sample-bar-chart/sample-bar-chart.component';
import { SampleDoughnutChartComponent } from '../../shared/components/sample-doughnut-chart/sample-doughnut-chart.component';
import { SampleRadarChartComponent } from '../../shared/components/sample-radar-chart/sample-radar-chart.component';
import { SamplePieChartComponent } from '../../shared/components/sample-pie-chart/sample-pie-chart.component';
import { SamplePlotAreaChartComponent } from '../../shared/components/sample-polar-area-chart/sample-polar-area-chart.component';
import { SampleDynamicChartComponent } from '../../shared/components/sample-dynamic-chart/sample-dynamic-chart.component';

@Component({
  moduleId: module.id,
  selector: 'app-samples',
  templateUrl: 'samples.component.html',
  styleUrls: ['samples.component.css'],
  directives: [SampleLineChartComponent, SampleBarChartComponent,
               SampleDoughnutChartComponent, SampleRadarChartComponent,
               SamplePieChartComponent, SamplePlotAreaChartComponent,
               SampleDynamicChartComponent]
})
export class SamplesComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
