import { Component, OnInit } from '@angular/core';
import { curveBasis, curveLinear } from 'd3-shape';


@Component({
  selector: 'app-nrx-graph-example',
  templateUrl: './nrx-graph-example.component.html',
  styleUrls: ['./nrx-graph-example.component.scss']
})
export class NrxGraphExampleComponent implements OnInit {

  nodes = [
    { id: 'CEO', label: 'CEO' },
    { id: 'Manager1', label: 'Manager 1' },
    { id: 'Manager2', label: 'Manager 2' },
    { id: 'Employee1', label: 'Employee 1' },
    { id: 'Employee2', label: 'Employee 2' },
    { id: 'Employee3', label: 'Employee 3' }
  ];

  links = [
    { source: 'CEO', target: 'Manager1', label: 'Reports to' },
    { source: 'CEO', target: 'Manager2', label: 'Reports to' },
    { source: 'Manager1', target: 'Employee1', label: 'Reports to' },
    { source: 'Manager2', target: 'Employee2', label: 'Reports to' },
    { source: 'Manager2', target: 'Employee3', label: 'Reports to' }
  ];

  curve = curveLinear;

  ngOnInit() {
    
  }

  constructor() {

  }


}
