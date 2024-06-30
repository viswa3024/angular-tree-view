import { Component, OnInit } from '@angular/core';
import { curveBasis } from 'd3-shape';
import { Node, Edge } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-nrx-graph-example',
  templateUrl: './nrx-graph-example.component.html',
  styleUrls: ['./nrx-graph-example.component.scss']
})
export class NrxGraphExampleComponent implements OnInit {

  nodes: Node[] = [
    { id: 'start', label: 'Start' },
    { id: 'mid', label: 'Middle' },
    { id: 'end', label: 'End' }
  ];

  links: Edge[] = [
    { id: 'a', source: 'start', target: 'mid', label: 'link A' },
    { id: 'b', source: 'mid', target: 'end', label: 'link B' }
  ];

  customNodeTemplate = `
    <ng-template #nodeTemplate let-node>
      <div class="custom-node">
        <strong>{{ node.label }}</strong>
      </div>
    </ng-template>
  `;

  customLinkTemplate = `
    <ng-template #linkTemplate let-link>
      <svg:path
        stroke="green"
        stroke-width="2"
        fill="none"
        class="custom-link"
        [attr.d]="link.path"
      />
    </ng-template>
  `;
  curve = curveBasis;

  ngOnInit() {
    
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
