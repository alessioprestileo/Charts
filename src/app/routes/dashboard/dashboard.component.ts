import { Component, OnInit } from '@angular/core';

import { UserCollectionsComponent } from './user-collections/user-collections.component'


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [UserCollectionsComponent]
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
