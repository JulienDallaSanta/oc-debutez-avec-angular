import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        createdDate: new Date(),
        snaps: 30,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
      },
      {
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées.',
        createdDate: new Date(),
        snaps: 85,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
      },
      {
        title: 'Un bon repas',
        description: 'Mmmh que c\'est bon !',
        createdDate: new Date(),
        snaps: 155,
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        location: 'Abos'
      }
    ]
  };
}
