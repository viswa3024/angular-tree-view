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
    { id: 'link1', source: 'Node1', target: 'Node2', label: 'Custom relationship 1', style: 'dashed' },
    { id: 'link2', source: 'Node2', target: 'Node3', label: 'Custom relationship 2', style: 'solid' },
    { id: 'link3', source: 'Node3', target: 'Node1', label: 'Custom relationship 3', style: 'dotted' }
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


  getNodeFillColor(node: any): string {
    // Example logic to determine fill color based on node properties
    return '#2ecc71'; // Default green color
  }

  getNodeBorderColor(node: any): string {
    // Example logic to determine border color based on node properties
    switch (node.id) {
      case 'Node1':
        return '#e74c3c'; // Red color for Node1
      case 'Node2':
        return '#3498db'; // Blue color for Node2
      case 'Node3':
        return '#f39c12'; // Orange color for Node3
      default:
        return '#000000'; // Black color for other nodes
    }
  }

  getNodeXPosition(node: any): number {
    // Example logic to determine X position based on node properties
    return 50; // Fixed X position for simplicity
  }

  getNodeYPosition(node: any): number {
    // Example logic to determine Y position based on node properties
    return 50 + this.nodes.indexOf(node) * 100; // Adjust Y position based on index
  }

  getTextXPosition(node: any): number {
    // Example logic to determine text X position based on node properties
    return 50 + node.width / 2; // Center text horizontally within node
  }

  getTextYPosition(node: any): number {
    // Example logic to determine text Y position based on node properties
    return 50 + node.height / 2; // Center text vertically within node
  }


}
