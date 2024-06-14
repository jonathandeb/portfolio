import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  // public sideOpen = new BehaviorSubject<any>({
  //   valor: true
  // });


  // constructor() {
  //   console.log(this.sideOpen.value)
  //  }

   public sideOpen: BehaviorSubject<boolean> = new BehaviorSubject({} as boolean);
   public sideMode: BehaviorSubject<'side'|'over'|'push'> = new BehaviorSubject({} as 'side'|'over'|'push');
  // public readonly currentUser: Observable<User> = this.currentUserSubject.asObservable();

  constructor() {
    this.sideOpen.next(true)
    this.sideMode.next('side')
    console.log(this.sideMode);
    
   }

  public setState(value:boolean): void {
    this.sideOpen.next(value);
  }
  public setMode(value:'side'|'over'|'push'): void {
    console.log(value);
    
    this.sideMode.next(value);
  }
}
