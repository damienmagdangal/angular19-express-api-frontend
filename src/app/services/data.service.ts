import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getTickers(): Observable<any> {
    const baseUrl = environment.API_URL;
    const apiKey = environment.API_KEY;
    const config = {
      headers: {
        Accept: 'application/json',
        'X-API-Token': apiKey,
      },
    };
    const result = this.http.get(baseUrl, config);
    return result;
  }
}
