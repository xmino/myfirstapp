import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  users: string[] = ['Ryan', 'Erick', 'Xavier'];

  constructor() { }

  ngOnInit() {
  }

  sayHello() {
    alert('Hi men');
  }

  borrarUser(user) {
    for (let i = 0; i < this.users.length; i++) {
      if (user == this.users[i]) {
        this.users.splice(i, 1);
        alert(user);
      }
    }

  }

}
