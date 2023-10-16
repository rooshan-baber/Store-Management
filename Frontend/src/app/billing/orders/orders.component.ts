import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { UserdataService } from 'src/app/services/userdata.service';
import { Router } from '@angular/router';

interface Product {
  PID: number;
  Pcat: number;
  Pcode: number;
  Pname: string;
  Pprice: number;
  productCategory: {
    Cname: string;
  };
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderForm: FormGroup = this.formBuilder.group({
    productForms: this.formBuilder.array([]),
  });  
  products: Product[] = [];

  constructor(private formBuilder: FormBuilder, private userData: UserdataService,private router: Router) {}

  ngOnInit(): void {
    this.displayProduct();
    this.orderForm = this.formBuilder.group({
      productForms: this.formBuilder.array([]),
    });
  }

  addNewProductForm(): void {
    const newProductForm = this.createProductForm();
    this.productForms.push(newProductForm);
  }

  createProductForm(): FormGroup {
    return this.formBuilder.group({
      product: [''],
      quantity: [1,[Validators.min(1)]],
      totalPrice: [],
      productCategory: [''],
    });
  }

  get productForms(): FormArray {
    return this.orderForm.get('productForms') as FormArray;
  }

  displayProduct(): void {
    this.userData.showProduct().subscribe((response: Product[]) => {
      this.products = response;
    });
  }

  productSelected(index: number): void {
    debugger
    const productFormGroup = this.productForms.at(index) as FormGroup;
    const selectedProductControl = productFormGroup.get('product');

    if (selectedProductControl) {
      const selectedProductName = selectedProductControl.value;
      const selectedProduct = this.products.find(product => product.Pname === selectedProductName);

      if (selectedProduct) {
        productFormGroup.patchValue({ productCategory: selectedProduct.productCategory.Cname });
        this.calculateTotalPrice(index);
      }
    }
  }

  calculateTotalPrice(index: number): void {
    const productFormGroup = this.productForms.at(index) as FormGroup;
    const selectedQuantityControl = productFormGroup.get('quantity');
    const selectedProduct = this.products.find(
      product => product.Pname === productFormGroup.get('product')?.value
    );

    if (selectedQuantityControl && selectedProduct) {
      const selectedQuantity = selectedQuantityControl.value;
      const totalPrice = selectedProduct.Pprice * selectedQuantity;
      productFormGroup.patchValue({ totalPrice: totalPrice });
    }
  }
  generateBill(){
    debugger
   const billData = this.productForms.value;
   this.userData.setBillData(billData);
   this.router.navigate(['billing/bill']);
  }
}
