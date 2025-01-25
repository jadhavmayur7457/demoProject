import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrls: ['./combinelatest.component.scss']
})
export class CombinelatestComponent {


  private pricesubjcet=new BehaviorSubject<string>('')
  private categoriesubject=new BehaviorSubject<string>('')
  private brandsubject=new BehaviorSubject<string>('')

  product:any[]=[]
  loading =false

  constructor(private http:HttpClient){
  combineLatest([this.pricesubjcet,this.categoriesubject,this.brandsubject]).pipe(

    tap(()=>(this.loading=true)),
    switchMap(([price,categories,brand])=>{
     
      const params:any={};

      if(price) params.price=price;
      if(categories)params.categories=categories;
      if(brand)params.brand=brand;

      return this.http.get<any[]>('https://api.example.com/products', { params })

    }),
    tap(()=>(this.loading=false))
  ).subscribe((product)=>{
    this.product=product
  })
  }

  oncategorieschange(event:Event):void{
    const categories=(event.target as HTMLSelectElement).value
  this.categoriesubject.next(categories)
  }
  onpricechange(event:Event):void{
    const price=(event.target as HTMLSelectElement).value
  this.pricesubjcet.next(price)
  }
  onbrandchange(event:Event):void{
    const brand=(event.target as HTMLSelectElement).value
   this.brandsubject.next(brand)
  }


}
// Subjects for Each Filter:

// Three BehaviorSubjects (categorySubject, priceSubject, and brandSubject) store the current value of each filter dropdown.
// They emit a new value whenever the corresponding dropdown's value changes.
// combineLatest:

// Combines the latest values emitted by all three subjects into an array [category, price, brand].
// This ensures that any change in one dropdown triggers a new combined value.
// switchMap:

// Cancels the previous API request (if any) and makes a new request with the latest filter values.
// Constructs the query parameters dynamically based on the selected filter values.
// Loading Indicator:

// The loading flag is used to display a spinner while the API request is in progress.