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
    { id: '4', label: 'Node 4' },
    { id: '5', label: 'Node 5' },
  ];
  
  links = [
    { source: '1', target: '2', label: 'Link 1' },
    { source: '2', target: '3', label: 'Link 2' },
    { source: '3', target: '4', label: 'Link 3' },
    { source: '4', target: '5', label: 'Link 4' },
  ];

  curve = curveBasis;

  constructor() { }

  ngOnInit(): void {
  }

}
