import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tree-view';
  jsonData = {
    a: { b: { c: { d: { e: { f: { g: { h: { i: { j: { k: { l: { m: { n: { o: 'Value at depth 15' } } } } } } } } } } } } },
    p: 'Another branch'
  }
}
}
