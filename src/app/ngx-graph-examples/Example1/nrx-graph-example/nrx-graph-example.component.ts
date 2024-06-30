import { Component, OnInit } from '@angular/core';
import { curveBasis } from 'd3-shape';

@Component({
  selector: 'app-nrx-graph-example',
  templateUrl: './nrx-graph-example.component.html',
  styleUrls: ['./nrx-graph-example.component.scss']
})
export class NrxGraphExampleComponent implements OnInit {

  nodes = [
    { id: '1', label: 'Node 1' },
    { id: '2', label: 'Node 2' },
    { id: '3', label: 'Node 3' },
  ];

  links = [
    { source: '1', target: '2', label: 'Link 1' },
    { source: '2', target: '3', label: 'Link 2' },
  ];

  curve = curveBasis;

  constructor() { }

  ngOnInit(): void {
  }

}
