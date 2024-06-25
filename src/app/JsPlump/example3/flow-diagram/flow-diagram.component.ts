import { Component, AfterViewInit, ElementRef } from '@angular/core';
import * as jsPlumb from 'jsplumb';

@Component({
  selector: 'app-flow-diagram',
  templateUrl: './flow-diagram.component.html',
  styleUrls: ['./flow-diagram.component.scss']
})
export class FlowDiagramComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.initializeJsPlumb();
  }

  initializeJsPlumb() {
    const instance = jsPlumb.jsPlumb.getInstance(); // Create instance directly
    instance.setContainer(this.elementRef.nativeElement.querySelector('#canvas')); // Set container

    // instance.bind('connection', (info: jsPlumb.Connection) => { // Specify 'info' type
    //   console.log('connection', info);
    // });

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
        console.log(`Clicked ${id}`);
        alert(`Clicked ${id}`)
        // Add logic to open dialog or perform other actions
      });
    }
  }
}
