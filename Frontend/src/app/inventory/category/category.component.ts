import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {UserdataService} from 'src/app/services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private userData: UserdataService, private router:Router) { }

  ngOnInit(): void {
  }

  categoryform = new FormGroup({
    Ccode: new FormControl('',[Validators.required]),
    Cname: new FormControl('',[Validators.required])
  });

  category(){
    try{
      if(this.categoryform.valid){
        debugger
        this.userData.addCategory(this.categoryform.value).subscribe(
          (response) =>{
            console.warn(response);
            this.router.navigate(['/inventory/additem']);
          })
      }
    }catch(error){
      console.error("Error", error)
    }
  }
}
