import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { backendata } from '../studentinterface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

   private  baseUrl:string= "https://jsonplaceholder.typicode.com/posts";
   private  BaseUrl:string="http://localhost:3000/"


  fetchdata(query?:string):Observable<any[]>{
      
    const url=query ?`${this.baseUrl}?search=${query}`:this.baseUrl;
    return this.http.get<any[]>( url)
  }

  getdata(endpoint:string):Observable<any>{
    const burl=this.BaseUrl+endpoint
  return  this.http.get(burl)
  }
}
