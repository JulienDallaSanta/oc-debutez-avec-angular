import { Component, OnInit } from '@angular/core';
import {FaceSnapsService} from "../services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page-component.html',
  styleUrls: ['./landing-page-component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private faceSnapsService: FaceSnapsService, private router: Router) { }

  ngOnInit(): void {
  }

  onContinue() {
    this.router.navigateByUrl('facesnaps');
  }

}
