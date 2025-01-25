import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
   
   Userobj:username=new username()
   
  constructor(){

  } 

 

  getdatafill(){
    let user1={
     name:"sagar",
     mobilenum:"8698759876",
     email:"jadhavmayurrajendr@gmail.com",
     city:"dhule",
     address:{
    pincode:15246,
    district:"nashik"
     }
     }
     this.Userobj={...user1}
  }

  submit(form:any){
  
  console.log(form.value)
      }
}


export class username{
  name:string="";
  email:string="";
  mobilenum:string="";
  city:string="";
  address:Address=new Address()
}

export class Address{
  pincode:number=0;
  district:string="";
}