import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	fecha = new Date()

	constructor(private router: Router) { }

	irAlLogin() {
		this.router.navigate([""])
		//this.router.navigate(["/cursos", "algebra"])
		// http://localhost:4200/cursos/algebra
	}
}
