import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  email = '12';
  password = '12';

  constructor(private router: Router) {}

  login() {
    if(this.email === '12' && this.password === '12') {
      this.router.navigate(['/loginSuccess']);
    }
  }
}