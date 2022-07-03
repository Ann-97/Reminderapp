import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentDate: any
 

  
  constructor(private http:HttpClient) {
    
   }

 

  //register
  register(uname:any,uid:any,password:any) {
    const data={
      uname,
      uid,
      password
    }
   return this.http.post('http://localhost:3000/register',data)
  }

//login
login(uid:any,pswd:any){
  //user entered acno and pswd

  const data={
    uid,
    pswd
  }
     //login api call
    return this.http.post('http://localhost:3000/login',data)
}

 // add event

 addEvent(uid: any, eventdate: any, eventname: any) {


  const data = {

    uid,
    
    eventdate,
    eventname

  }


  // api call addEvent
  return this.http.post(' http://localhost:3000/addEvent', data)


}


 

 viewevent(uid: any) {

  const data = {
    uid

  }

  // api call viewDetails
  return this.http.post(' http://localhost:3000/viewevent', data)
}





}