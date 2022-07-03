import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= this.fb.group({
   
    uid:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })


  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    var uid=this.loginForm.value.uid;
    var pswd=this.loginForm.value.pswd;
    //call login in dataservice
 
    if(this.loginForm.valid){
     this.ds.login(uid,pswd)
     .subscribe((result:any)=>{
       if (result){
         console.log(result);
         
         localStorage.setItem('currentUid',JSON.stringify(result.currentUid))
         localStorage.setItem('currentUname',JSON.stringify(result.currentEvent))
        // localStorage.setItem("token",JSON.stringify(result.token))
         alert(result.message)
         this.router.navigateByUrl("dashboard")
     
        }  
     },
     (result)=>{
       alert(result.error.message);
     
     }
     
   
     )}
   else{
     alert("invalid form")
   }
 }
 

}
