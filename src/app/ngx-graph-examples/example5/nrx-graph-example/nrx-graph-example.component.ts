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

  constructor() {
    // Dynamically update graph
    setInterval(() => {
      const newNode: Node = { id: (this.nodes.length + 1).toString(), label: `Node ${this.nodes.length + 1}` };
      this.nodes.push(newNode);

      const newLink: Edge = { source: this.nodes[this.nodes.length - 2].id, target: newNode.id, label: `Link ${newNode.id}` };
      this.links.push(newLink);
    }, 2000);
  }

  ngOnInit(): void { }

}
