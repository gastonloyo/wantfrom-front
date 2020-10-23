import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ecommerce';
  user:boolean;
  admin:boolean;

  constructor(public router: Router){
    this.user=false;
    this.admin=false;
  }
}
