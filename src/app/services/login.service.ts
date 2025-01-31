import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; // Import environment file

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = environment.apiUrl; // Use the environment variable

  constructor(private http: HttpClient) {}

  signup(user: any) {
    return this.http.post(`${this.baseUrl}/users/registration`, user, { responseType: 'json' });
  }

  login(user: any) {
    return this.http.post(`${this.baseUrl}/users/login`, user, { responseType: 'json' });
  }

  getUsers(userid: any) {
    return this.http.get(`${this.baseUrl}/users/customer/${userid}`, { responseType: 'json' });
  }

  getCustomerbyName(username: any) {
    return this.http.get(`${this.baseUrl}/customerbyName/${username}`, { responseType: 'json' });
  }
}
