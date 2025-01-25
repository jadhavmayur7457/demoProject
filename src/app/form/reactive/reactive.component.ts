import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent {
  registration!:FormGroup

   
  constructor(private fb:FormBuilder){}

  ngOnInit(){
    // this.registration= new FormGroup({
    //   name:new FormControl('',),
    //   mobile:new FormControl('',),
    //   city:new FormControl('',),
    //   email:new FormControl('',)
    // })

    this.registration=this.fb.group({
      name:['',],
      email:['',],
      city:['',],
      mobile:['',],

    })
  }
    
  patchvalue(){
    let user1={
      name:"Ravi",
      email:"mayurjadhav8554@gmail.com",
      mobile:"8698759876",
      city:"dhule"

    }
    this.registration.patchValue(user1)
  }
  setcity(){
    this.registration.get("city")?.patchValue('banblore')
  }
  setvalue(){
    let user={
      name:"Mayur",
      email:"mayurjadhav8554@gmail.com",
      mobile:"8698759876",
      city:"dhule"

    }
    this.registration.setValue(user)
  }
  
  submitform(){
    this.registration.value;
    console.log(this.registration.value,"comes here")

    console.log(this.registration.get('name')?.value);
    console.log(this.registration.get('city')?.value);
    console.log(this.registration.controls?.['name'].value);
    console.log(this.registration.get('name')?.errors)
   }
  }
 

