import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerHome: string = './assets/home/slide3.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
