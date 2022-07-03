import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // form model 
dashboardForm= this.fb.group({
  
  eventdate:[''],
  eventname:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

  constructor(private ds:DataService,private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }
 
  addEvent() {
  
   
    var eventdate = this.dashboardForm.value.eventdate
    var eventname = this.dashboardForm.value.eventname

    console.log(eventname,eventdate);
    
    var uid = JSON.parse(localStorage.getItem('currentUid') || '')
    //var token = JSON.parse(localStorage.getItem('token') || '')

    // alert(date)



    if (this.dashboardForm.valid) {
    
      
      // call dataservice


      this.ds.addEvent(uid, eventdate, eventname)
        .subscribe((result: any) => {

          if (result) {

     

            alert(result.message)

           
          }
        },
          (result: any) => {
            alert(result.error.message)
          })

    } else {
      alert("invalid entry")
    }


  }




}
