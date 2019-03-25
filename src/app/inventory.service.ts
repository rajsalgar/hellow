import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private httpClient: HttpClient) {
  }

  getInventoryData() {
    return this.httpClient.get("/assets/inventory.json");
  }
}
