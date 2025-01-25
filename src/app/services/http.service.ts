import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

   private  baseUrl:string= "https://jsonplaceholder.typicode.com/posts";


  fetchdata(query?:string):Observable<any[]>{
      
    const url=query ?`${this.baseUrl}?search=${query}`:this.baseUrl;
    return this.http.get<any[]>( url)
  }
}
