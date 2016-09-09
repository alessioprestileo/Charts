import {
  AfterViewChecked, Component, DoCheck, EventEmitter, Inject, OnInit, OnDestroy,
} from '@angular/core';
import { Location }    from '@angular/common';

import { Subscription }   from 'rxjs/Rx';

import { AppRoutingService } from './shared/services/app-routing.service';
import { NavButton } from "./shared/models/NavButton";
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SiteMapComponent } from './shared/site-map/site-map.component';

let onResizeEmitter: EventEmitter<any> = new EventEmitter();

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavigationComponent, SiteMapComponent]
})
export class AppComponent implements AfterViewChecked, DoCheck,
                                     OnDestroy, OnInit {
  private currentUrl: string;
  private navInput: any[];
  private prevBrowserPath: string;
  private siteMapInput: any[];
  private subCurrentUrl: Subscription;
  private subOnResize: Subscription;
  private title: string;

  constructor(@Inject('ROUTES_DICT') private ROUTES_DICT,
              private location: Location,
              private appRoutingService: AppRoutingService) {
  }
  ngOnInit() {
    window.onresize = this.onResize;
    this.subOnResize = onResizeEmitter.subscribe(() => this.setBodyHeight());
    this.title = 'Alessio\'s Charts';
    this.subCurrentUrl = this.appRoutingService.currentUrl.subscribe(
      (url: string) : void => {
        this.currentUrl = url;
        this.setSiteMapInput(url);
      });
    this.setNavInput();
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.cancelSubs();
  }
  ngAfterViewChecked() {
    // Call setBodyHeight to get changes in header or footer size
    this.setBodyHeight();
  }
  ngDoCheck() {
    // Perform checks for time travel
    this.checkTimeTravel();
    // Perform checks for route re-direct
    this.checkRouteReDirect();
  }

  private cancelSubs() : void {
    this.subCurrentUrl.unsubscribe();
    this.subOnResize.unsubscribe();
  }
  private checkRouteReDirect() : void {
    let browserPath: string = this.location.path();
    if ((browserPath) && (browserPath === this.prevBrowserPath)) {
      if (browserPath !== this.currentUrl) {
        this.appRoutingService.navigate([browserPath]);
      }
    }
  }
  private checkTimeTravel() : void {
    let browserPath: string = this.location.path();
    if ((browserPath) && (browserPath !== this.prevBrowserPath)) {
      this.prevBrowserPath = browserPath;
      if (browserPath !== this.currentUrl) {
        let link:string[] = [browserPath];
        this.appRoutingService.navigate(link);
      }
    }
  }
  public onHomeButtonClicked() : void {
    this.appRoutingService.navigate(['/' + this.ROUTES_DICT.SAMPLES]);
  }
  private onResize() : void {
    onResizeEmitter.emit();
  }
  public onSiteMapClick(link: string[]) : void {
    this.appRoutingService.navigate(link);
  }
  private setBodyHeight() : void {
    let header: HTMLElement;
    let headerHeight: number;
    let footerHeight: number;
    let routerOutlet: HTMLElement;
    let body: HTMLElement;
    header = document.getElementById("app-header");
    headerHeight = document.getElementById("app-header").clientHeight;
    footerHeight = document.getElementById("app-footer").clientHeight;
    body = document.getElementById("app-body");
    body.style.height = 0.97 * window.innerHeight - headerHeight -
                                footerHeight + 'px';
    routerOutlet = document.getElementById("app-router-outlet");
    routerOutlet.style.height = body.style.height;
  }
  private setNavInput() : void {
    let columnsPerSec: number;
    let navLevel: number;
    let navSections: NavButton[];
    let sectionsPerRow: number;
    navSections = [
      new NavButton('Dashboard', ['/' + this.ROUTES_DICT.DASHBOARD]),
      new NavButton('Samples', ['/' + this.ROUTES_DICT.SAMPLES]),
      new NavButton('New Chart', ['/' + this.ROUTES_DICT.NEW_CHART]),
      new NavButton('Lab', ['/' + this.ROUTES_DICT.LAB])
    ];
    columnsPerSec = 2;
    navLevel = 1;
    sectionsPerRow = 4;
    this.navInput = [navLevel, navSections, columnsPerSec, sectionsPerRow];
  }
  private setSiteMapInput(currentUrl: string) : void {
    let labels: string[] = [];
    let links: string[][] = [[]];
    let parentLink: string[] = [''];
    let splitUrl: string[] = currentUrl.split('/').splice(1);
    let urlLength: number = splitUrl.length;
    for (let i = 0; i < urlLength; i++) {
      let link: string[] = [parentLink[0] + '/' + splitUrl[i]];
      parentLink[0] = link[0];
      links[i] = link;
      labels[i] = splitUrl[i].replace(/[_]+/g, ' ');
    }
    this.siteMapInput = [labels, links];
  }
}
