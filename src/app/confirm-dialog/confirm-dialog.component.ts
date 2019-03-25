import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

export interface DialogData {
  name: string;
  body: string;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onEmailClick() {
    this.dialogRef.close();
    this.router.navigate(['/']);
  }
  
  onCancelClick() {
    this.dialogRef.close();
    this.router.navigate(['/']);
  }

}
