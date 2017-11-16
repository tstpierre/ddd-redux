import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-container',
    templateUrl: './home-container.component.html',
    styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent {

    router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    launch(route: string) {
        let destination: string = '/' + route;
        this.router.navigate([destination]);
    }

}