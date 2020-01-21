import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-ve',
  templateUrl: './hola-ve.component.html',
  styleUrls: ['./hola-ve.component.css']
})
export class HolaVeComponent implements OnInit {
  usuarios = ['user1','user2','user3'];

  constructor() { }

  ngOnInit() {
  }

}
