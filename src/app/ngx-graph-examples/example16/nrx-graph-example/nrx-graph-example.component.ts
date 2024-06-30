import { Component, OnInit } from '@angular/core';
import { curveBasis, curveLinear } from 'd3-shape';


@Component({
  selector: 'app-nrx-graph-example',
  templateUrl: './nrx-graph-example.component.html',
  styleUrls: ['./nrx-graph-example.component.scss']
})
export class NrxGraphExampleComponent implements OnInit {

  nodes = [
    { id: 'Node1', label: 'Node 1', width: 150, height: 70 },
    { id: 'Node2', label: 'Node 2', width: 150, height: 70 },
    { id: 'Node3', label: 'Node 3', width: 150, height: 70 }
  ];

  links = [
    { source: 'Node1', target: 'Node2', label: 'Custom relationship', style: 'dashed' },
    { source: 'Node2', target: 'Node3', label: 'Custom relationship', style: 'solid' },
    { source: 'Node3', target: 'Node1', label: 'Custom relationship', style: 'dotted' }
  ];


  curve = curveLinear;

  ngOnInit() {
    
  }

  constructor() {

  }

  onNodeClick(node: any) {
    alert(`Clicked node: ${node.label}`);
  }

  onLinkClick(link: any) {
    alert(`Clicked link: ${link.label}`);
  }


}
