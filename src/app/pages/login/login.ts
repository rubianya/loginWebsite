import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  // ใน html ผูก [(ngModel)] ไว้กับ email แต่ใน API ของ Java รับเป็น username 
  // แนะนำให้กรอกเป็น username หรือถ้าจะใช้ email ล็อกอิน ต้องไปแก้ฝั่ง Java ค้นหาด้วย email แทนครับ
  username = '';
  password = '';

  constructor (
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  login() {
    if (!this.username || !this.password) {
      alert('Please fill in all fields');
      return;
    }

    // เรียกใช้ Service ที่ส่ง HTTP POST ไปหา Java
    this.userService.loginBackend(this.username, this.password).subscribe({
      next: (response) => {
        // เมื่อ Login สำเร็จ (Spring Boot ส่งสถานะ 200 OK กลับมา)
        console.log('Login Success, Token:', response.token);
        
        // บันทึก JWT Token ลงเครื่องเพื่อใช้สิทธิ์ในหน้าอื่น ๆ
        localStorage.setItem('token', response.token);
        
        this.authService.login(); // จัดการ State การ Login ใน App
        this.router.navigate(['/home']);
      },
      error: (err) => {
        // เมื่อหลังบ้านส่ง 401 หรือ Error กลับมา
        console.error(err);
        const errorMsg = err.error?.error || 'Invalid username or password';
        alert(errorMsg);
      }
    });
  }

}