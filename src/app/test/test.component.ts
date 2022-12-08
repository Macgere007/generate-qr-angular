import { Component } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  title = 'generate-qrcode';
  value!: string;
  display = false;
  href!: string;
 
  generateQRCode(){
    this.value = 'test';
    this.display = true;
    this.href = document.getElementsByTagName('img')[0].src;
    console.log(this.value)
    console.log(this.href)
  }

}
