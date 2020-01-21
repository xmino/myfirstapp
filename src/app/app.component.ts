import { Component } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstapp';
  paths = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      console.log(data)
      this.paths = data});

  }
}
