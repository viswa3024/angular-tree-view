// src/app/flow-diagram/flow-diagram.component.ts
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { jsPlumb } from 'jsplumb';

@Component({
  selector: 'app-flow-diagram',
  templateUrl: './flow-diagram.component.html',
  styleUrls: ['./flow-diagram.component.scss']
})
export class FlowDiagramComponent implements AfterViewInit, OnInit {
  ngOnInit(): void {
    // Additional initialization if necessary
  }

  ngAfterViewInit() {
    this.initializeJsPlumb();
  }

  initializeJsPlumb() {
    const instance = jsPlumb.getInstance({
      Connector: ['Bezier', { curviness: 50 }],
      PaintStyle: { stroke: '#567567', strokeWidth: 2 },
      Endpoint: ['Dot', { radius: 5 }],
      EndpointStyle: { fill: '#567567' },
      Container: 'canvas'
    });

    instance.bind('connection', (info) => {
      console.log('connection', info);
    });

    // Add some elements to connect
    instance.addEndpoint('item_left', {
      anchor: 'RightMiddle',
      isSource: true,
      maxConnections: -1
    });

    instance.addEndpoint('item_right', {
      anchor: 'LeftMiddle',
      isTarget: true,
      maxConnections: -1
    });

    instance.connect({ source: 'item_left', target: 'item_right' });

    // Make elements draggable
    instance.draggable('item_left');
    instance.draggable('item_right');
  }
}
