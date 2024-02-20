import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {
  constructor(private router: Router) { }
  register() {
    this.router.navigateByUrl('login');
  }
}
