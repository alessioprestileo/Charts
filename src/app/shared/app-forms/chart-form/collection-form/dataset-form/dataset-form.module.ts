import { NgModule }           from '@angular/core';

import { DataSetFormComponent } from "./dataset-form.component";
import { FromExternalModule } from "./from-external/from-external.module";
import { FromUserDataModule } from "./from-user-data/from-user-data.module";
import { SharedModule } from "../../../../shared.module";


@NgModule({
  imports: [
    FromExternalModule, FromUserDataModule, SharedModule
  ],
  declarations: [ DataSetFormComponent ],
  exports:      [ DataSetFormComponent ],
  providers:    [ ]
})
export class DataSetFormModule { }
