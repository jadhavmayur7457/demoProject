import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, of, retry, retryWhen } from 'rxjs';

@Component({
  selector: 'app-api-failure',
  templateUrl: './api-failure.component.html',
  styleUrls: ['./api-failure.component.scss']
})
export class ApiFailureComponent {


  Errormessage:string | null | undefined;

  constructor(private http:HttpClient){
   this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(
    retry(3),
      catchError((error)=>{
        this.Errormessage="failed after 3 entries"
        return of (null)
      })
   ).subscribe((data)=>{
    if(data){
      console.log('Api data')
    }
   })
  }

 
}

