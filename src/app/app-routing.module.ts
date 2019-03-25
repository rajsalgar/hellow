import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Report1Component } from './report1/report1.component';
import { Report2Component } from './report2/report2.component';
import { ProfileComponent } from './profile/profile.component';
import { InventoryCertificationRequestComponent } from './inventory-certification-request/inventory-certification-request.component';
import { ReviewRequestComponent } from './review-request/review-request.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PdfViewComponent } from './pdf-view/pdf-view.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'report1', component: Report1Component},
  {path: 'report2', component: Report2Component},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'request', component: InventoryCertificationRequestComponent},
  {path: 'review/:id', component: ReviewRequestComponent},
  {path: "inventory", component: InventoryComponent},
  {path: "pdf_view", component: PdfViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
