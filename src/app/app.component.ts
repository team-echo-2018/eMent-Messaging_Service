import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';

interface imessage{
  message:string;
  recieverId:string;
  senderId:string
}

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  postsCol: AngularFirestoreCollection<imessage>;
  posts: Observable<imessage[]>;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCol = this.afs.collection('messages');
    this.posts = this.postsCol.valueChanges();
  }

}

