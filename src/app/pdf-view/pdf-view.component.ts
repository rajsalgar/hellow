import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.scss']
})
export class PdfViewComponent implements OnInit {
  src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor() { }

  ngOnInit() {
  }

}
