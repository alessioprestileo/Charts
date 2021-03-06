import { Component, Inject, OnInit } from '@angular/core';

import { NavButton } from "../shared/models/NavButton";

@Component({
  moduleId: module.id,
  selector: 'app-charts-nav',
  templateUrl: 'charts-nav.component.html',
  styleUrls: ['charts-nav.component.css'],
})
export class ChartsNavComponent implements OnInit {
  private navInput: any[];

  constructor(@Inject('ROUTES_DICT') private ROUTES_DICT) {}

  ngOnInit() {
    this.setNavInput();
  }

  private setNavInput() : void {
    let columnsPerSec: number;
    let navLevel: number;
    let navSections: NavButton[];
    let sectionsPerRow: number;

    navSections = [
      new NavButton(
        'Dashboard',
        [
          '/' + this.ROUTES_DICT.DASHBOARD
        ]
      ),
      new NavButton(
        'Samples',
        [
          '/' + this.ROUTES_DICT.SAMPLES
        ]
      )
    ];
    columnsPerSec = 2;
    navLevel = 1;
    sectionsPerRow = 2;
    this.navInput = [navLevel, navSections, columnsPerSec, sectionsPerRow];
  }

}
