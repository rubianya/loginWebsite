import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  email = '';
  password = '';

  constructor (
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    if(this.email && this.password) {
      this.authService.login();
      this.router.navigate(['/loginSuccess']);
    }
  }

}