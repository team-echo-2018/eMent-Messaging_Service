import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

// tslint:disable-next-line:class-name
interface imessage {
  message: string;
  recieverId: string;
  senderId: string;
}
//let senderList =Array<{string}>;

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  postsCol: AngularFirestoreCollection<imessage>;
  posts: Observable<imessage[]>;
  senderSet: Set<string> = new Set<string>();

  message: string;
  senderId = 'usr003';
  recieverid: string ;
  owner = 'mario';
  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCol = this.afs.collection('messages', ref => ref.where('recieverID', '==', this.owner));
    this.posts = this.postsCol.valueChanges();
    this.posts.forEach(element => {
      console.log(element);
      element.forEach(msg => {
        if (msg.recieverID === 'mario') {
          this.senderSet.add(msg.recieverId);
        }
        console.log(msg);

      });
      console.log(this.senderSet);

    });

  }

  addmessage() {

    //  this.afs.collection('messages').add({'message':this.message,'recieverID':this.recieverid,'senderID':this.senderId});
    // this.afs.collection('messages').doc(this.recieverid).set({'message':this.message,'recieverID':this.recieverid,'senderID':this.senderId});

  }
  openNav() {

  }

}
