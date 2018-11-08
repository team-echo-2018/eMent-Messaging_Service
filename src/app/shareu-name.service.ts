import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'

})

export class ShareuNameService {
  private uname =new BehaviorSubject<string>("default user");
  currentMessage =this.uname.asObservable();


  constructor() { }

  changesMessage(val :string){
    this.uname.next(val);
    console.log("logging from service :"+val);


  }


}
