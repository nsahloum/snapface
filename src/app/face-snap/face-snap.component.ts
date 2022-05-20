import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit() {
    this.title = 'Hello';
    this.description ='Hello World!';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://dummyimage.com/600x400/000/fff'
  }
}
