import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuMobileOpen = false;

  constructor(route: ActivatedRoute, private router: Router) {
    router.events.subscribe(val => {
      this.menuMobileOpen = false;
    });
  }

  ngOnInit() {
  }

}
