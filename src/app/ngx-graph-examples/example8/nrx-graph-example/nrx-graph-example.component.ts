import { Component, OnInit } from '@angular/core';
import { curveBasis } from 'd3-shape';

@Component({
  selector: 'app-nrx-graph-example',
  templateUrl: './nrx-graph-example.component.html',
  styleUrls: ['./nrx-graph-example.component.scss']
})
export class NrxGraphExampleComponent implements OnInit {

  nodes = [
    { id: '1', label: 'Node 1', dimension: { width: 100, height: 50 }, color: 'red' },
    { id: '2', label: 'Node 2', dimension: { width: 100, height: 50 }, color: 'green' },
    { id: '3', label: 'Node 3', dimension: { width: 100, height: 50 }, color: 'blue' },
  ];

  links = [
    { source: '1', target: '2', label: 'Link 1' },
    { source: '2', target: '3', label: 'Link 2' },
  ];

  curve = curveBasis;

  ngOnInit() {
    setInterval(() => {
      this.updateGraph();
    }, 3000);
  }

  updateGraph() {
    const newNode = {
      id: (this.nodes.length + 1).toString(),
      label: `Node ${this.nodes.length + 1}`,
      dimension: { width: 100, height: 50 },
      color: 'orange',
    };
    this.nodes.push(newNode);
    const newLink = {
      source: this.nodes[this.nodes.length - 2].id,
      target: newNode.id,
      label: `Link ${this.links.length + 1}`,
    };
    this.links.push(newLink);
  }




  constructor() {

  }

  saveGraph() {
    const graphState = {
      nodes: this.nodes,
      links: this.links,
    };
    localStorage.setItem('graphState', JSON.stringify(graphState));
  }
  
  loadGraph() {
    const graphState = JSON.parse(localStorage.getItem('graphState')!);
    if (graphState) {
      this.nodes = graphState.nodes;
      this.links = graphState.links;
    }
  }


}
