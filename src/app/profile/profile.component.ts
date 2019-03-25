import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  inventoryID: any;
  curInventoryData: any;
  curInventoryName: any;

  currencies: string[] = ['USD', 'EUR', 'YEN', 'CAD', 'AUD', 'GBP'];

  constructor(
    private inventoryService: InventoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.inventoryID = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.inventoryService.getInventoryData().subscribe((res : any[]) => {
      this.curInventoryData = res;
      this.curInventoryName = this.curInventoryData.data[this.inventoryID]['name'];
    });
  }

  actionButton() {
    this.router.navigate(['/']);
  }

}
