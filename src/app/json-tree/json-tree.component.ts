import { Component, Input } from '@angular/core';

@Component({
  selector: 'json-tree',
  templateUrl: './json-tree.component.html',
  styleUrls: ['./json-tree.component.scss']
})
export class JsonTreeComponent {
  @Input() data: any;

  toggle(item: any) {
    console.log("item: ", item)
    item.open = !item.open;
    item.value['open'] = !item.value['open']
  }

  isObject(value: any): value is Record<string, any> {
    return value && typeof value === 'object' && !Array.isArray(value);
  }
}
