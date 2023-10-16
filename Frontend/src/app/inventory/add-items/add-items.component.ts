import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {UserdataService} from 'src/app/services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  constructor(private userData: UserdataService, private router:Router) { }

  ngOnInit(): void {
    this.displayCategory()
  }

  productform = new FormGroup({
    Pcode : new FormControl('',[Validators.required]),
    Pname : new FormControl('',[Validators.required]),
    Pprice : new FormControl('',[Validators.required]),
    Pcat : new FormControl('',[Validators.required])
  })

  product(){
    try{
      if(this.productform.valid){
        this.userData.addProduct(this.productform.value).subscribe(
          (response) =>{
            console.warn(response);
            this.router.navigate(['/inventory/products']);
          })
      }
    }catch(error){
      console.error()
    }
  }
  allC:any;
  displayCategory(){
    this.userData.showCategory().subscribe((response)=>{
      this.allC = response;
      console.warn(response);
    })
  }
}
