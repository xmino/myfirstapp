import { Component } from "@angular/core";

@Component(
  {
   selector : 'hello-world',
   templateUrl : './one.component.html',
    styles: []
  }
)
export class HelloWorld {
  minombre = ['adrian', 'valeria', 'eve'];
  activated = true;
}
