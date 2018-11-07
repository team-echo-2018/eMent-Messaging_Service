import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
import { map } from 'rxjs/operators';

// tslint:disable-next-line:class-name
interface isendEvent {
  recieverID: string;
  senderID: string;
}
//  let senderList =Array<{string}>;

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  postsCol: AngularFirestoreCollection<isendEvent>;
  posts: Observable<isendEvent[]>;
  senderset =new Set();

  message: string;
  senderId = 'usr003';
  recieverid: string ;
  owner = "mario";
  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    //this.postsCol = this.afs.collection('sendEvent', ref => ref.where('recieverID', '==', this.owner));
    this.postsCol =this.afs.collection('sendEvent');
   // console.log(this.owner);

    this.posts = this.postsCol.valueChanges();
    // console.log(this.posts);

    this.posts.forEach(p =>{
      console.log(p[0].senderID);
      if(!this.senderset[p[0].senderID]){
         this.senderset.add(p[0].senderID);
      }
      console.log(this.senderset);


    })

  }

  addmessage() {

    //  this.afs.collection('messages').add({'message':this.message,'recieverID':this.recieverid,'senderID':this.senderId});
    // this.afs.collection('messages').doc(this.recieverid).set({'message':this.message,'recieverID':this.recieverid,'senderID':this.senderId});

  }
  openNav() {

  }

}
