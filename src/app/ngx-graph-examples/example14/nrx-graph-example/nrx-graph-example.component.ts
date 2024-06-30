import { Component, OnInit } from '@angular/core';
import { curveBasis, curveLinear } from 'd3-shape';


@Component({
  selector: 'app-nrx-graph-example',
  templateUrl: './nrx-graph-example.component.html',
  styleUrls: ['./nrx-graph-example.component.scss']
})
export class NrxGraphExampleComponent implements OnInit {

  nodes = [
    { id: 'Alice', label: 'Alice' },
    { id: 'Bob', label: 'Bob' },
    { id: 'Charlie', label: 'Charlie' },
    { id: 'David', label: 'David' },
    { id: 'Eve', label: 'Eve' }
  ];

  links = [
    { source: 'Alice', target: 'Bob', label: 'Friend' },
    { source: 'Alice', target: 'Charlie', label: 'Friend' },
    { source: 'Bob', target: 'David', label: 'Colleague' },
    { source: 'Charlie', target: 'Eve', label: 'Family' }
  ];

  curve = curveLinear;

  ngOnInit() {
    
  }

  constructor() {

  }


}
