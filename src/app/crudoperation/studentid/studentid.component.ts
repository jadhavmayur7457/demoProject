import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { backendata, govtInfo, studentdetail, studentinform } from 'src/app/studentinterface';

@Component({
  selector: 'app-studentid',
  templateUrl: './studentid.component.html',
  styleUrls: ['./studentid.component.scss']
})
export class StudentidComponent implements OnInit {


  studentdata:any=[]
  generalData: any;
  constructor(private http:HttpService){}

  ngOnInit(): void {
    this.studentinfo()
  }
  studentinfo() {
this.http.getdata("studentInfo").subscribe({
  next:(resp)=>{
  this.studentdata=resp.filter((item:any)=>item.name);
  this.generalData=resp.find((item:any)=>item.pincode)
  console.log(this.studentdata,"aala ka")
  }
})
  }
  // pipe( map((item)=>{
  
  // }))
    
      
  



}
