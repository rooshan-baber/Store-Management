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

  ngOnInit(): void {}
  billData = this.userData.getBillData();
  totalPriceSum = this.billData.reduce(
    (sum: any, data: { totalPrice: any }) => sum + data.totalPrice,
    0
  );

  printPage() {
    // window.print();
    const divToPrint = document.getElementById('print-index-invoice');
    const newWin = window.open('', 'Print-Window');
    newWin?.document.open();
    newWin?.document.write(
      '<html><link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" media="print"/><body onload="window.print()">' +
        divToPrint?.innerHTML +
        '</body></html>'
    );
    newWin?.document.close();
    setTimeout(function () {
      newWin?.close();
    }, 10);
  }
}
