import { Component, OnInit } from '@angular/core';
import { ActionDialogComponent } from '../action-dialog/action-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  header1: string[] = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF'];
  value: string[] = ['134', '5000', '5000', '2123566', '5222', '12321'];
  currencies: string[] = ['USD', 'EUR', 'YEN', 'CAD', 'AUD', 'GBP'];

  constructor(    
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openDialog(kind: any) {
    this.dialog.open(ActionDialogComponent, {
      width: "500px",
      data: {kind: kind}
    });
  }
}
