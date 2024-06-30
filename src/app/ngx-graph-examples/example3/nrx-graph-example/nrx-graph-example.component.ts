import { Component, OnInit } from '@angular/core';
import { Node, Edge } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-nrx-graph-example',
  templateUrl: './nrx-graph-example.component.html',
  styleUrls: ['./nrx-graph-example.component.scss']
})
export class NrxGraphExampleComponent implements OnInit {

  nodes: Node[] = [
    { id: '1', label: 'Node 1' },
    { id: '2', label: 'Node 2' }
  ];

  links: Edge[] = [
    { source: '1', target: '2', label: 'Link 1-2' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
