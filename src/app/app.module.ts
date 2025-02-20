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
import { Tab2ContentComponent } from './tab2-content/tab2-content.component';
import { CustomLoadingComponent } from './components/custom-loading/custom-loading.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcrumbItemComponent } from './components/breadcrumb-item/breadcrumb-item.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { CustomToolComponent } from './components/custom-tool/custom-tool.component';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { ProgressIndicatorComponent } from './components/progress-indicator/progress-indicator.component';
import { ContentSwitcherComponent } from './components/content-switcher/content-switcher.component';
import { ContentSwitcherOptionComponent } from './components/content-switcher-option/content-switcher-option.component';
import { CustomIconComponent } from './components/custom-icon/custom-icon.component';
import { SafeHtmlPipe } from './components/safe-html.pipe';
import { CustomHamburgerComponent } from './components/custom-hamburger/custom-hamburger.component';
import { CustomToggleComponent } from './components/custom-toggle/custom-toggle.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { CustomHeaderNavigationComponent } from './components/custom-header-navigation/custom-header-navigation.component';
import { CustomHeaderItemComponent } from './components/custom-header-item/custom-header-item.component';
import { CustomHeaderMenuComponent } from './components/custom-header-menu/custom-header-menu.component';
import { CustomHeaderGlobalComponent } from './components/custom-header-global/custom-header-global.component';
import { CustomHeaderActionComponent } from './components/custom-header-action/custom-header-action.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CustomPaginationComponent } from './components/custom-pagination/custom-pagination.component';  // Import FormsModule

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
    Tab2ContentComponent,
    CustomLoadingComponent,
    BreadcrumbComponent,
    BreadcrumbItemComponent,
    CustomTableComponent,
    CustomToolComponent,
    CustomModalComponent,
    ProgressIndicatorComponent,
    ContentSwitcherComponent,
    ContentSwitcherOptionComponent,
    CustomIconComponent,
    SafeHtmlPipe,
    CustomHamburgerComponent,
    CustomToggleComponent,
    ToggleComponent,
    CustomHeaderComponent,
    CustomHeaderNavigationComponent,
    CustomHeaderItemComponent,
    CustomHeaderMenuComponent,
    CustomHeaderGlobalComponent,
    CustomHeaderActionComponent,
    PaginationComponent,
    CustomPaginationComponent
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
