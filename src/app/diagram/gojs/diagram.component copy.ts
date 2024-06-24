import { Component, AfterViewInit } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const $ = go.GraphObject.make;

    const myDiagram = $(go.Diagram, 'myDiagramDiv', {
      'undoManager.isEnabled': true
    });

    myDiagram.nodeTemplate =
      $(go.Node, 'Auto',
        $(go.Shape, 'RoundedRectangle',
          { strokeWidth: 0 },
          new go.Binding('fill', 'color')),
        $(go.TextBlock,
          { margin: 8 },
          new go.Binding('text', 'key'))
      );

    myDiagram.model = new go.GraphLinksModel(
      [
        { key: 'Alpha', color: 'lightblue' },
        { key: 'Beta', color: 'orange' },
        { key: 'Gamma', color: 'lightgreen' },
        { key: 'Delta', color: 'pink' }
      ],
      [
        { from: 'Alpha', to: 'Beta' },
        { from: 'Alpha', to: 'Gamma' },
        { from: 'Beta', to: 'Beta' },
        { from: 'Gamma', to: 'Delta' },
        { from: 'Delta', to: 'Alpha' }
      ]
    );
  }
}
