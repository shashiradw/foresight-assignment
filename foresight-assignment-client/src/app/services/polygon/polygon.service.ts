import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolygonService {

  private apiUrl='http://localhost:5000/api/polygon?name='+sessionStorage.getItem("name");

  constructor(private http : HttpClient) { }

  drawPolygon(point: [number,number]): Observable<any>{   
    return this.http.post<any> (this.apiUrl,point);
  }
  
}
