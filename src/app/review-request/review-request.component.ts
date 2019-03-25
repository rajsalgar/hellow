import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-request',
  templateUrl: './review-request.component.html',
  styleUrls: ['./review-request.component.scss']
})
export class ReviewRequestComponent implements OnInit {

  readFlag: any = 0;
  inventoryID: any;
  curInventoryData: any;
  curInventoryName: any;
  curInventoryEmail: any;

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) {
    this.inventoryID = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.readFlag = 0;
    this.inventoryService.getInventoryData().subscribe((res : any[]) => {
      this.curInventoryData = res;
      this.curInventoryName = this.curInventoryData.data[this.inventoryID]['name'];
      this.curInventoryEmail = this.curInventoryData.data[this.inventoryID]['email_address'];
    });
  }

  clickMakeAsRead() {
    this.readFlag = 1;
  }

}
