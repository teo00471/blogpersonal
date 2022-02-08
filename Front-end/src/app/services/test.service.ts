import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  obtenerData(id:string,name:string,email:string):Observable<any>
{

  const url = "https://blogpersonalmorcho.herokuapp.com/obtenerDatos";
  return this.http.get(url)
  console.log(url)

}
}


