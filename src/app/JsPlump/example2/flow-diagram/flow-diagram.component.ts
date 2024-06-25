// flow-diagram.component.ts
import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { jsPlumb } from 'jsplumb';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-flow-diagram',
  templateUrl: './flow-diagram.component.html',
  styleUrls: ['./flow-diagram.component.scss']
})
export class FlowDiagramComponent implements AfterViewInit {
  constructor(private dialogService: DialogService, private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.initializeJsPlumb();
  }

  initializeJsPlumb() {
    const instance = jsPlumb.getInstance({
      Container: this.elementRef.nativeElement.querySelector('#canvas')
    });

    instance.bind('connection', (info) => {
      console.log('connection', info);
    });

    this.addItem(instance, 'item_left', 'Item Left', 'This is the left item.');
    this.addItem(instance, 'item_right', 'Item Right', 'This is the right item.');

    instance.connect({ source: 'item_left', target: 'item_right' });

    instance.draggable('item_left');
    instance.draggable('item_right');
  }

  addItem(instance: any, id: string, name: string, description: string) {
    instance.addEndpoint(id, {
      anchor: id === 'item_left' ? 'RightMiddle' : 'LeftMiddle',
      isSource: id === 'item_left',
      isTarget: id === 'item_right',
      maxConnections: -1
    });

    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('click', () => {
        this.dialogService.open({ name, description });
      });
    }
  }
}
