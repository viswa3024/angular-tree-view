import { Component, OnInit } from '@angular/core';
import { curveBasis } from 'd3-shape';


@Component({
  selector: 'app-nrx-graph-example',
  templateUrl: './nrx-graph-example.component.html',
  styleUrls: ['./nrx-graph-example.component.scss']
})
export class NrxGraphExampleComponent implements OnInit {

  nodes = [
    { id: 'A', label: 'Node A' },
    { id: 'B', label: 'Node B' },
    { id: 'C', label: 'Node C' }
  ];

  links = [
    { source: 'A', target: 'B', label: 'Edge from A to B' },
    { source: 'B', target: 'C', label: 'Edge from B to C' },
    { source: 'C', target: 'A', label: 'Edge from C to A' }
  ];

  curve = curveBasis;

  ngOnInit() {
    
  }

  constructor() {

  }


}
