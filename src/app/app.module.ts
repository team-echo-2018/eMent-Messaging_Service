import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FormsModule} from '@angular/forms';

// tslint:disable-next-line:prefer-const
const fiebaseconfig = {
  apiKey: 'AIzaSyAw1dPGrmqwa63g0tRtU7rmSJnFn1Zki8A',
  authDomain: 'e-ment-chat.firebaseapp.com',
  databaseURL: 'https://e-ment-chat.firebaseio.com',
  projectId: 'e-ment-chat',
  storageBucket: 'e-ment-chat.appspot.com',
  messagingSenderId: '748618873530'
};


import { AppComponent } from './app.component';
//import { NavbarComponent } from './navbar/navbar.component';
import { ChatmessagesComponent } from './chatmessages/chatmessages.component';
import { RouterModule } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatmessagesComponent,
    InboxComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(fiebaseconfig),
    AngularFirestoreModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'inbox',
        component: InboxComponent
      },
      {
        path: 'sendmessage',
        component: ChatmessagesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
