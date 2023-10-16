import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserdataService} from '../services/userdata.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userData: UserdataService,
             private router:Router) { }

  ngOnInit(): void {
  }
  getdata(data:NgForm){
    debugger
    this.userData.saveUser(data).subscribe((result:any)=>{
      console.log(result);
      if(Object.keys(result).length>0){
        debugger
        this.router.navigate(["/login"]);
      }
    });
  }
}