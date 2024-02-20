import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    // Add basic JavaScript to toggle between login and register forms
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Initially hide register form
    registerForm!.style.display = 'none';

    // Add click event listener to a button (you can create a dedicated button or link)
    // to toggle between forms
    document.querySelector('#toggle-button')!.addEventListener('click', () => {
      if (loginForm!.style.display === 'block') {
        loginForm!.style.display = 'none';
        registerForm!.style.display = 'block';
      } else {
        loginForm!.style.display = 'block';
        registerForm!.style.display = 'none';
      }
    });
  }

  login() {
    this.router.navigateByUrl('services');
  }

  register() {
    this.router.navigateByUrl('register');
  }
}


