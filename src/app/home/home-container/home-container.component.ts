import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  launchCounterExample() {
    this.router.navigate(['/counter']);
  }

}