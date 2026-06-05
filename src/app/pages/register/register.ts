import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {

  username = '';
  phone = '';
  email = '';
  password = '';
  confirmPassword = '';

  errorMessage = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  register() {
    this.errorMessage = '';

    // username
    if(this.username.length < 4){
      this.errorMessage = 'Username must be at least 4 characters';
      return;
    }

     // phone
    const phoneRegex = /^[0-9]{10}$/;
    if(!phoneRegex.test(this.phone)){
      this.errorMessage = 'Phone number must contain 10 digits';
      return;
    }

    // email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(this.email)){
      this.errorMessage = 'Invalid email format';
      return;
    }

    // password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if(!passwordRegex.test(this.password)){
      this.errorMessage = 'Password must contain [A-Z], [a-z], 0-9 and [@$!%*?&]';
      return;
    }

    // confirm password
    if(this.password !== this.confirmPassword){
      this.errorMessage = 'Passwords do not match';
      return;
    }

    // success
    const newUser = {
      username: this.username,
      phone: this.phone,
      email: this.email,
      password: this.password
    };

    // เรียกใช้ Service ส่งข้อมูลไปเซฟที่ฐานข้อมูลหลังบ้าน
    this.userService.registerBackend(newUser).subscribe({
      next: (response) => {
        alert('Register Success');
        this.router.navigate(['/']); // กลับไปหน้า Login
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = err.error?.error || 'Register Failed. Please try again.';
      }
    });

  }

}