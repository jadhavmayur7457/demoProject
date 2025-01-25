

export interface studentdetail{
    studentId:number,
    address:string,
    admissionDate:number;

} 

export interface studentinform{
    name:string,
    subject:string,
    passout:number,
    studentdetail:studentdetail[]
}

export interface govtInfo{
    goverment:string,
    pincode:number,
    city:string,
    vilage:{
        pincode:number[];
        groupanchyat:{
            name?:string;
            year?:number;
            head?:string;
            medical?:string;
            report? :string;
            nearby?:string;
        }[]

      
    }
}
export interface backendata{
    StudentInfo:(govtInfo|studentinform)[]
}