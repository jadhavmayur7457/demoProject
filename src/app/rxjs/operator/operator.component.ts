import { query } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, Subject, switchMap, tap } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent {
   
   data:any[]=[]
       
     Searchsubjcet:Subject<string>=new Subject()// create subjcet
     searchSubject: Subject<string> = new Subject<string>();
    
   constructor(private http:HttpService){

   }
  
   ngOnInit(){
    this.Searchsubjcet.pipe(
      debounceTime(500),  //Wait for 300ms after the last keystroke
      distinctUntilChanged(),// Ignore if the next value is the same as the previous
      switchMap((query:string)=>this.http.fetchdata(query))//// Cancel previous request if a new one is triggered
    ).
    subscribe((data:any)=>{
      this.data=data;
      console.log(this.data,"data ")
    },
    (error)=>{
     console.log("error handling data",error)
    })

    
   }
  onSearch(query:string){
  this.Searchsubjcet.next(query)
  if (!query) {
    
    this.data = [];
  }
  }




  
}
