import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { CustomTreeViewComponent } from './custom-tree-view/custom-tree-view.component';
import { JsonTreeComponent } from './json-tree/json-tree.component';
import { DiagramComponent } from './diagram/diagram.component';
import { FlowDiagramComponent } from './flow-diagram/flow-diagram.component';
import { DialogComponent } from './dialog/dialog.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NrxGraphExampleComponent } from './nrx-graph-example/nrx-graph-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { ModalComponent } from './modal/modal.component';  // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    DynamicTableComponent,
    CustomTreeViewComponent,
    JsonTreeComponent,
    DiagramComponent,
    FlowDiagramComponent,
    DialogComponent,
    NrxGraphExampleComponent,
    CustomTooltipComponent,
    FilterComponent,
    CustomSelectComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
