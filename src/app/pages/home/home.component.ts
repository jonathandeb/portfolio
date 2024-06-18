import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SendEmailComponent } from 'src/app/components/send-email/send-email.component';
import { SendWhatsappComponent } from 'src/app/components/send-whatsapp/send-whatsapp.component';
import { ServicioService } from 'src/app/services/servicio.service';

const projects=[
  {
    name:'TechArmy',
    img:'assets/images/Categorias.png',
    text:'E-commerce protoype',
    skills:['angular','redux','html','css','firebase'],
    link:'https://tiendaonline-f70d7.web.app/dashboard',
    yutu:'https://youtu.be/lvwfJ-sNRCw',
    git:'',
  },
  {
    name:'MyMusic',
    img:'assets/images/MusicHome.PNG',
    text:'Social-network protoype',
    skills:['mongo','express','angular','nodejs','redux','html','css'],
    link:'https://mymusic-8019b.web.app/',
    yutu:'https://youtu.be/K56Kw1txIpw',
    git:'',
  },
  {
    name:'Prestamistapp',
    img:'assets/images/Categorias.png',
    text:'Lender App',
    skills:['angular','redux','firebase','html','css','bootstrap'],
    link:'',
    yutu:'https://www.youtube.com/playlist?list=PLcujpNtDvZY2nKEWqGSGeeHFQPbeb7AU2',
    git:'',
  },
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projectsArray=projects;
  sideOpen = true;
  bgImg='assets/images/Categorias.png';
  


  constructor(private ser: ServicioService, private _snackBar: MatSnackBar, private _bottomSheet: MatBottomSheet ){}
  ngOnInit(): void {
    
    this.ser.sideOpen.subscribe(
      {
      next: valor => {
        this.sideOpen = 
        // Observable.interval(5000).startWith(false).switchMap(()=>{
          valor

        // })
        console.log(valor)
      }
      }
      )
    
    window.onresize = this.reportWindowSize;
  }
  async reportWindowSize() {
    const widthOutput = document.getElementById('bandsContainer')?.clientWidth
    console.log(widthOutput);
    
    if(widthOutput){
      // this.ser.setMode('over')
      
      if(widthOutput<=400){
        await this.ser.sideOpen.next(false);
        // this.ser.sideMode.next('over');
      }
      else{
        // this.ser.sideMode.next('side');    
      }
    }else{
        // this.ser.sideMode.next('side');    

    }
  }
  
  sendEmail(): void {
    this._bottomSheet.open(SendEmailComponent);
  }

  sendWhats(): void {
    this._bottomSheet.open(SendWhatsappComponent);
  }

  openSide(){
    this.ser.sideOpen.next(true);
    this._snackBar.open('<--- My socials', 'Ok', {
      duration: 3000
    });
  }
 

}
