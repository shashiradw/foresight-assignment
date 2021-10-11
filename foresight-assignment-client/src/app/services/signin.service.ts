import { Injectable } from '@angular/core';
import { UserLogin } from 'src/UserLogin';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private apiUrl='http://localhost:5000/api/signin';

  constructor(private http : HttpClient) { }

  signIn(user : UserLogin) : Observable<any>{   
    return this.http.post<any> (this.apiUrl, user);
  }
  
}
