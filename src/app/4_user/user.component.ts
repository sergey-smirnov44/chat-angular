import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { style } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public showThis = false;
  public buttonName = 'Show';



  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

  toggle() {
   this.showThis = !this.showThis
  }
}
