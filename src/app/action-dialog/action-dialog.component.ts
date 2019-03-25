import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

export interface DialogData {
  kind: string;
};
@Component({
  selector: 'app-action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.scss']
})
export class ActionDialogComponent implements OnInit {
  resend_flag: any = "";
  body: any = "";

  constructor(
    public dialogRef: MatDialogRef<ActionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
    this.router.navigate(['/']);
  }

  onSaveClick() {
    this.dialogRef.close();

    if(this.data.kind == 'reject' && (this.resend_flag != true)) {
      this.router.navigate(['/']);
    } else {
      if(this.resend_flag == true) {
        this.dialog.open(ConfirmDialogComponent, {
          width: "500px",
          data: {name: "reject", body: this.body}
        });
      } else {
        this.dialog.open(ConfirmDialogComponent, {
          width: "500px",
          data: {name: "accept", body: this.body}
        });
      }
    }
  }
}
