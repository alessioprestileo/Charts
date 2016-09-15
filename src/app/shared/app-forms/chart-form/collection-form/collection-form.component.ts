import {
  Component, DoCheck, Input, OnDestroy, OnInit,
} from '@angular/core';
import {
  REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup, Validators
} from '@angular/forms';

import { Subscription }   from 'rxjs/Rx';

import { AppChartCollection } from "../../../models/AppChartCollection";
import { InputBoxComponent } from '../../input-box/input-box.component';
import { DataSetFormComponent } from './dataset-form/dataset-form.component';

@Component({
  moduleId: module.id,
  selector: 'app-collection-form',
  templateUrl: 'collection-form.component.html',
  styleUrls: ['collection-form.component.css'],
  directives: [
    REACTIVE_FORM_DIRECTIVES, DataSetFormComponent, InputBoxComponent
  ]
})
export class CollectionFormComponent implements DoCheck, OnDestroy, OnInit {
  @Input() private currentPosition: number;
  @Input() private currentCollection: AppChartCollection;
  @Input() private detachedCollection: boolean = false;
  @Input() private formGroup: FormGroup;
  @Input() private newCollection: boolean = true;
  private subNameControl: Subscription;
  private titleLabel: string;

  constructor() {}

  ngOnInit() {
    this.titleLabel = 'Collection';
    this.addFormControls();
    this.createControlsSubs();
  }
  ngOnDestroy() {
    this.removeFormControls();
    this.cancelSubs();
  }
  ngDoCheck() {
  }

  private addFormControls() : void {
    this.formGroup.addControl(
      'name', new FormControl(this.currentCollection.name, Validators.required)
    );
  }
  private cancelControlsSubs() : void {
    this.subNameControl.unsubscribe();
  }
  private cancelSubs() : void {
    this.cancelControlsSubs();
  }
  private createControlsSubs() : void {
    this.subNameControl = this.formGroup.controls['name']
      .valueChanges.subscribe(
        (value: string) : void => {
          this.currentCollection.name = value;
        }
      );
  }
  private removeFormControls() : void {
    this.formGroup.removeControl('name');
  }
}
