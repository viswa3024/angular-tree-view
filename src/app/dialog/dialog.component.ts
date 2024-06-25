// dialog.component.ts
import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  content: any;

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.dialogService.content$.subscribe(content => {
      this.content = content;
    });
  }

  close() {
    this.dialogService.close();
  }
}
