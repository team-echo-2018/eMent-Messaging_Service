import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

interface imessage{
  message:string;
  recieverId:string;
  senderId:string
}

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  postsCol: AngularFirestoreCollection<imessage>;
  posts: Observable<imessage[]>;

  message:string;
  senderId :string ="usr003";
  recieverid:string ;
  owner:string ='mario';
  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCol = this.afs.collection('messages',ref =>ref.where('recieverID','==',this.owner));
    this.posts = this.postsCol.valueChanges();
  }

  addmessage(){
        
   // this.afs.collection('messages').add({'message':this.message,'recieverID':this.recieverid,'senderID':this.senderId});
    //this.afs.collection('messages').doc(this.recieverid).set({'message':this.message,'recieverID':this.recieverid,'senderID':this.senderId});
    
  }
  openNav(){
    
  }

}
