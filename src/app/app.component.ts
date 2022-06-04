import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap;
  mySecondSnap!: FaceSnap;
  myThirdSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = {
      title: 'Hello',
      description: 'Hello World',
      createdDate: new Date(),
      snaps: 12,
      imageUrl: 'https://dummyimage.com/600x400/000/fff',
    };

    this.mySecondSnap = {
      title: 'Hello2',
      description: 'Hello World2',
      createdDate: new Date(),
      snaps: 1,
      imageUrl: 'https://dummyimage.com/600x400/fff/000',
    };

    this.myThirdSnap = {
      title: 'Hello3',
      description: 'Hello World3',
      createdDate: new Date(),
      snaps: 2,
      imageUrl: 'https://dummyimage.com/600x400/cf1fcf/fff',
    };

  }
}
