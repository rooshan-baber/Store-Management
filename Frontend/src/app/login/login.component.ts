import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from '../services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userData: UserdataService, private router: Router) {}

  ngOnInit(): void {}
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login() {
    if (this.loginform.valid) {
      debugger
      this.userData.loginUser(this.loginform.value).subscribe(
        (response) => {
          const token = response.token;
          if (token) {
            localStorage.setItem('Token', token);
            localStorage.setItem('user', 'true');
            this.router.navigate(['']);
          } else {
            console.warn('Token not found in the response.');
          }
        },
        (error) => {
          console.error('Error in loginUser service:', error);
        }
      );
    }
  }
}
