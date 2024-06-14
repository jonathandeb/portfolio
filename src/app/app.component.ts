import { Component, OnInit } from '@angular/core';
import { ServicioService } from './services/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sideOpen = true;
  title = 'Portfolio';
  modeNav:"side"|"over"|"push"="side";
  constructor(private ser: ServicioService){
  }
  ngOnInit(): void {
    this.ser.sideOpen.subscribe(
      {
      next:valor => 
      {
        this.sideOpen=valor        
      }
      }
    )
  }

  openSide(){
  // this.sideOpen = !this.sideOpen;
  this.sideOpen = !this.sideOpen;
  this.ser.sideOpen.next(this.sideOpen);
  // this.ser.sideOpen.value.valor = this.sideOpen;
    
  }
}
