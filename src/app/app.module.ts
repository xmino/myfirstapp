import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorld } from './componente1/one.component';
import { HolaVeComponent } from './hola-ve/hola-ve.component';
import { UserComponent } from './user/user.component';
import { ActionComponent } from './action/action.component';
import { DataService} from "./data.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Route} from "@angular/router";
import { AboutComponent } from './about/about.component';

const routes: Route[] = [
  {path: '', component: HolaVeComponent},
  {path: 'about', component:AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    HolaVeComponent,
    UserComponent,
    ActionComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
