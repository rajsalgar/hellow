import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatTableModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatDialogModule, MatListModule, MatCheckboxModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { Report1Component } from './report1/report1.component';
import { Report2Component } from './report2/report2.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { InventoryCertificationRequestComponent } from './inventory-certification-request/inventory-certification-request.component';
import { ReviewRequestComponent } from './review-request/review-request.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ActionDialogComponent } from './action-dialog/action-dialog.component';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    Report1Component,
    Report2Component,
    ProfileComponent,
    UploadDialogComponent,
    InventoryCertificationRequestComponent,
    ReviewRequestComponent,
    InventoryComponent,
    ActionDialogComponent,
    PdfViewComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    UploadDialogComponent,
    ActionDialogComponent,
    ConfirmDialogComponent
  ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);