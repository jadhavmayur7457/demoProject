import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {


  private searchsubject =new Subject<string>();

  product:any[]=[];

  loading=false
  constructor(private http:HttpClient){
  this.searchsubject.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    tap(()=>(this.loading=true)),
     switchMap((query)=>{
      return this.http.get<any[]>(`https://api.example.com/products?q=${query}`)
     }),
     tap(()=>(this.loading=false)) 
  ).subscribe((result)=>{
     this.product=result
  })
  }
  // onSearch(query:string){
  // this.searchsubject.next(query)
  // }
  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement | null; // Explicit type assertion
    if (input) {
      this.searchsubject.next(input.value); // Emit the value to searchSubject
    }
  }
}
