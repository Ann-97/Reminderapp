import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css']
})
export class VieweventComponent implements OnInit {
  uid: any;
  events: any;
  currentDate: any

 

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder ) {
 

  this.uid = JSON.parse(localStorage.getItem('currentUid') || '')

  this.ds.viewevent(this.uid)
    .subscribe((result: any) => {

      this.events = result.event

    },
      (result: any) => {
        alert(result.error.message)
      })

}


  ngOnInit(): void {
  }
  

}


