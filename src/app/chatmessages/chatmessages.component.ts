
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, from } from 'node_modules/rxjs';
import { map } from 'rxjs/operators';
import { ShareuNameService } from "../shareu-name.service"
import { log } from 'util';

interface isendEvent {
  recieverID: string;
  senderID: string;
}

interface imessage{
  message:string;
  recieverId:string;
  senderId:string
}

@Component({
  selector: 'app-chatmessages',
  templateUrl: './chatmessages.component.html',
  styleUrls: ['./chatmessages.component.css']
})
export class ChatmessagesComponent implements OnInit {

  val:string;
  postsCol: AngularFirestoreCollection<imessage>;
  posts: Observable<imessage[]>;

  message:string;
  senderId :string ="usr003";
  recieverid:string ;
  owner:string ='mario';
  constructor(private afs: AngularFirestore ,private data :ShareuNameService) {

  }

  ngOnInit() {

    this.data.currentMessage.subscribe(val =>this.senderId);
    console.log(this.senderId+"from message component");

    this.postsCol = this.afs.collection('messages',ref =>ref.where('recieverID','==',this.senderId));
    this.posts = this.postsCol.valueChanges();



  }

  //THE PART FOR THE ADDITION OF NEW MESSAGES TO THE FIRESTORE
  // THERE ARE CURRENTLY TWO MAIN DATABSE COLLECTIONS *sendEvent* FOR MAINTAINING THE DETAILS OF A MESSAGE BEING SENT
  // * messages * FOR RECORDING THE DETAILS OF MESSAGES BEING SENT

  addmessage(){

    // *** CHECK FOR DUPLICATES OF PRIOR SENDEVENTS FROM sendEvent COLLECTION ***

    let duplicates =this.afs.collection('sendEvent',ref =>ref.where('recieverID','==',this.owner).where("senderID","==",this.senderId));

    // ADD NEW MESSAGE DOCUMENT TO message COLLECTION

    //                      $$$$$$ IMPORTANT $$$$$$

    //CHANGE THE VALUES OF this.recieverID and this.senderID AS THESE ARE FOR TESTING PERPOSES
    //    this.senderID ==> this.owner
    //    this.recieverID ==> this.reciverId

    this.afs.collection('messages').add({'message':this.message,'recieverID':this.recieverid,'senderID':this.senderId});

    //IF DUPLICATES DONT EXIST AND THE #duplicate VARIABLE IS NONE ==>PROCEED!!

    if(!duplicates){

      this.afs.collection('sendEvent').add({'recieverID':this.recieverid,'senderID':this.senderId});

    }else{

      console.log("duplicate sender reciever pairs found !!");

    }

    //this.afs.collection('messages').doc(this.recieverid).set({'message':this.message,'recieverID':this.recieverid,'senderID':this.senderId});

  }
  openNav(){

  }
}
