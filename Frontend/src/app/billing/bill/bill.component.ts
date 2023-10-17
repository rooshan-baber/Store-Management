import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms'; // Make sure you import these
import { UserdataService } from 'src/app/services/userdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  constructor(private userData: UserdataService, private router: Router) {}

  productForms: any = new FormArray([]);
  
  ngOnInit(): void {
    
  }
  billData = this.userData.getBillData();
  totalPriceSum = this.billData.reduce((sum: any, data: { totalPrice: any; }) => sum + data.totalPrice, 0);

  printPage() {
    window.print();
  }
}
