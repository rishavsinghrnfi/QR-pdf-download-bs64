import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('pdfElement') pdfEl!: ElementRef;

  options = { 
    filename: 'newfile.pdf',
    image: {
      type: 'jpeg',
      quality: '0.98',
    },
    html2canvas: {
      scale: 2,
    } 
  };

  onSave() {
   // const pEl = document.getElementById('pEl');
    var element = document.getElementById('root');
    console.log(element);
    html2pdf().from(element).set(this.options).save();
    //html2pdf().from(pEl).set(this.options).save();
  }
}
