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
import { ModalComponent } from './modal/modal.component';
import { TableComponent } from './table/table.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DynamicCssComponent } from './dynamic-css/dynamic-css.component';
import { GlobalCssComponent } from './global-css/global-css.component';
import { IbmTabsComponent } from './components/ibm-tabs/ibm-tabs.component';
import { IbmTabComponent } from './components/ibm-tab/ibm-tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { Tab1ContentComponent } from './tab1-content/tab1-content.component';
import { Tab2ContentComponent } from './tab2-content/tab2-content.component';  // Import FormsModule

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
    ModalComponent,
    TableComponent,
    ColorPickerComponent,
    CustomFormComponent,
    FileUploadComponent,
    DynamicCssComponent,
    GlobalCssComponent,
    IbmTabsComponent,
    IbmTabComponent,
    TabsComponent,
    TabComponent,
    Tab1ContentComponent,
    Tab2ContentComponent
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
