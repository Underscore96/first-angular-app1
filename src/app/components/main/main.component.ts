import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  mockData: Student[] = [
    {
      name: 'damiano',
      surname: 'di lionardo',
      age: 30,
      imageUrl: 'https://flxt.tmsimg.com/assets/494807_v9_bd.jpg'
    },
    {
      name: 'luca',
      surname: 'verduci',
      age: 24,
      imageUrl: 'https://media-assets.vanityfair.it/photos/62ab0248e4470a5f3c5fdec0/1:1/pass/RyanGosling-Ken-Barbie.jpg'
    }
  ];


}
