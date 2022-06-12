import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor( private readonly http: HttpClient) { }

  public getData(id:number): Promise<any>{
    return this.http.get(`${environment.apiUrl}/user/${id}`).toPromise();
  }

}
