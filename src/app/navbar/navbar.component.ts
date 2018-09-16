import { Component, OnInit } from '@angular/core';
//import {ChatmessagesComponen } from 'src/app/chatmessages';
import {Routes} from '@angular/router';
import { ChatmessagesComponent } from '../chatmessages/chatmessages.component';
import { RouterModule } from '@angular/router';


@Component({
  
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})


export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
