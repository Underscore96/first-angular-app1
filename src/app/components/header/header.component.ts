import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  title:string = 'super app';
  version:number = 5;
  userName?:string;

  constructor(){
    console.log('sto costruendo l\'Header');
    //this.title = 'super app'
  }

  ngOnInit(): void {
    console.log('sto inizializzando l\'header');
  }

  login():void {
    this.userName = 'andrea'
  }

}
