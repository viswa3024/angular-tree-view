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
    // Initialize jsPlumb
    const instance = jsPlumb.jsPlumb.getInstance({
      // Specify jsPlumb configuration options if needed
    });

    // Set the container for jsPlumb
    instance.setContainer(this.elementRef.nativeElement.querySelector('#canvas'));

    // Define connection styles
    const connectorPaintStyle = {
      strokeWidth: 2,
      stroke: '#61B7CF',
      dashstyle: '2 4' // Dashed line style: 2 pixels solid, 4 pixels empty
    };

    const connectorHoverStyle = {
      strokeWidth: 3,
      stroke: '#216477'
    };

    // Register connection type with style
    instance.registerConnectionType('basic', {
      paintStyle: connectorPaintStyle,
      hoverPaintStyle: connectorHoverStyle,
      endpoint: 'Blank', // No endpoint on the connection
      anchors: ['Right', 'Left'], // Anchors for source and target
      overlays: [
        ['Arrow', { location: 1, width: 10, length: 10 }]
      ]
    });

    // Bind connection event (optional)
    instance.bind('connection', (info) => {
      console.log('connection', info);
      // Handle connection event here
    });

    // Add example items
    this.addItem(instance, 'item_left', 'Item Left', 'This is the left item.');
    this.addItem(instance, 'item_right', 'Item Right', 'This is the right item.');

    // Make items draggable
    instance.draggable('item_left');
    instance.draggable('item_right');

    // Connect example items
    instance.connect({
      source: 'item_left',
      target: 'item_right',
    });
  }

  addItem(instance: any, id: string, name: string, description: string) {
    // Add endpoints to the items
    instance.addEndpoint(id, { anchor: 'Right' }, { isSource: true });
    instance.addEndpoint(id, { anchor: 'Left' }, { isTarget: true });

    // Add click event handler (optional)
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('click', () => {
        console.log(`Clicked ${id}`);
        // Add logic to open dialog or perform other actions
      });
    }
  }
}
