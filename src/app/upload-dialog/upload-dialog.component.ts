import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

export interface DialogData {
  name: string;
  statue: string;
};

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onSaveClick() {
    this.dialogRef.close();
    this.router.navigate(['/inventory']);
  }

}
