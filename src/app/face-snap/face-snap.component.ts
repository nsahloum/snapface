import { Component, Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  onSnap() {
    if (this.faceSnap.buttonText === "Oh snap!"){
      this.faceSnap.snaps++;
      this.faceSnap.buttonText = "Unsnap!";
    } else {
      this.faceSnap.snaps--;
      this.faceSnap.buttonText = "Oh snap!";
    }
  }

}
