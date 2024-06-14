import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-send-whatsapp',
  templateUrl: './send-whatsapp.component.html',
  styleUrls: ['./send-whatsapp.component.css']
})
export class SendWhatsappComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<SendWhatsappComponent>) {}
  texto: string = ""
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  enviar(){
    window.open(`https://wa.me/526682712627?text=${this.texto}`);
  }
}
