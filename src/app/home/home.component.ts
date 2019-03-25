import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { InventoryService } from '../inventory.service';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['Name', 'Num', 'Statue', 'Email', 'Inventory', 'Email Address'];
  dataSource: any;
  displayedData: any;

  inventoryRequest: string[] = [];

  constructor(
    private inventoryService: InventoryService,
    private dialog: MatDialog,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.inventoryService.getInventoryData().subscribe((res : any[]) => {
      this.displayedData = res;
      this.dataSource = new MatTableDataSource(this.displayedData.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(id: any) {
    this.dialog.open(UploadDialogComponent, {
      width: "500px",
      data: {name: this.displayedData.data[id].name, statue: this.displayedData.data[id].statue}
    });
  }

  clickCheckBox(id: any) {
    if(this.hasRequest(id) > -1) {
      this.inventoryRequest.splice(this.hasRequest(id));
    } else {
      this.inventoryRequest.push(id);
    }
  }

  hasRequest(id: any) {
    return this.inventoryRequest.indexOf(id);
  }

  submitRequest() {
    if(this.inventoryRequest.length == 0) {
      alert('Please select data.');
    } else {
      localStorage.setItem('requsetData', JSON.stringify(this.inventoryRequest));
      this.router.navigate(['./request']);
    }
  }

  singleRequest(id: any) {
    // this.inventoryRequest = [];
    // this.inventoryRequest.push(id);
    // this.submitRequest();
    this.router.navigate(['./review']);
  }

  openRequest(id: any) {
    this.router.navigate(['./inventory'])
  }

}

