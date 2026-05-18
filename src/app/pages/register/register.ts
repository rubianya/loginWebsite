import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {

  username = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  register() {
    if(this.username && this.email && this.password) {
      this.router.navigate(['/registerSuccess']);
    }
  }
}