import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faceSnap!: FaceSnap;

  ngOnInit() {
    this.faceSnap = new FaceSnap('Hello', 'Hello World', new Date(), 12, 'https://dummyimage.com/600x400/000/fff', 'Oh snap!');
  }

}
