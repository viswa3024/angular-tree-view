import { Component, OnInit } from '@angular/core';
import { curveBasis, curveLinear } from 'd3-shape';


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
    { source: 'A', target: 'B', label: 'Edge between A and B' },
    { source: 'B', target: 'C', label: 'Edge between B and C' },
    { source: 'C', target: 'A', label: 'Edge between C and A' }
  ];

  curve = curveLinear;

  ngOnInit() {
    
  }

  constructor() {

  }


}
