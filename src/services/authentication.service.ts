import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'mongodb+srv://admin:admin@taskmanagementcluster.z1oywsl.mongodb.net/?retryWrites=true&w=majority';

  constructor(private http: HttpClient) { }

  login(credentials: { Email: string, password: string }) {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, credentials);
  }

  signup(user: { name: string, Email: string, phone: number, password: string }) {
    const url = `${this.baseUrl}/register`;
    return this.http.post(url, user);
  }


}