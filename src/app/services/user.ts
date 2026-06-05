import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  // URL ของ Java Spring Boot Controller ของคุณ
  private apiUrl = 'http://localhost:8080/api'; 

  constructor(private http: HttpClient) {}

  // เชื่อมกับ @PostMapping("login")
  loginBackend(usernameOrEmail: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, {
      username: usernameOrEmail, // ใน Spring Boot รับผ่าน LoginRequest (username, password)
      password: password
    });
  }

  // เชื่อมกับ @PostMapping("/save") ของ EntityDome2
  registerBackend(userResource: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/save`, userResource);
  }
}