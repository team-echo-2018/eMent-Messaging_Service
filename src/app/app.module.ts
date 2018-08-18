import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';

var fiebaseconfig ={
  apiKey: "AIzaSyAw1dPGrmqwa63g0tRtU7rmSJnFn1Zki8A",
  authDomain: "e-ment-chat.firebaseapp.com",
  databaseURL: "https://e-ment-chat.firebaseio.com",
  projectId: "e-ment-chat",
  storageBucket: "e-ment-chat.appspot.com",
  messagingSenderId: "748618873530"
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(fiebaseconfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
