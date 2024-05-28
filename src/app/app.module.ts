import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { CustomTreeViewComponent } from './custom-tree-view/custom-tree-view.component';
import { JsonTreeComponent } from './json-tree/json-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    DynamicTableComponent,
    CustomTreeViewComponent,
    JsonTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
