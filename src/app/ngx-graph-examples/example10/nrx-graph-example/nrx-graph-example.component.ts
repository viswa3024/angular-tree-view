import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nrx-graph-example',
  templateUrl: './nrx-graph-example.component.html',
  styleUrls: ['./nrx-graph-example.component.scss']
})
export class NrxGraphExampleComponent implements OnInit {

  nodes = [
    { id: 'start', label: 'Start' },
    { id: 'mid', label: 'Mid' },
    { id: 'end', label: 'End' }
  ];

  links = [
    { source: 'start', target: 'mid', label: 'to mid' },
    { source: 'mid', target: 'end', label: 'to end' }
  ];

  ngOnInit() {
    
  }

  constructor() {

  }


}
