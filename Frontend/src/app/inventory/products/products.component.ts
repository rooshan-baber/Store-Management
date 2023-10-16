import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private userData: UserdataService, private router: Router) {}

  showEdit: boolean = false;
  ngOnInit(): void {
    this.displayProducts();
    this.displayCategory();
  }
  allP: any;
  displayProducts() {
    this.userData.showProduct().subscribe((response) => {
      this.allP = response;
    });
  }
  showEditForm(pro: any) {
    this.showEdit = true;
    this.editForm.setValue({
      Pcode: pro.Pcode,
      Pname: pro.Pname,
      Pprice: pro.Pprice,
      Pcat: pro.productCategory.Cname,
    });
  }

  hideEditForm() {
    this.showEdit = false;
    this.editForm.reset();
  }

  editForm = new FormGroup({
    Pcode: new FormControl({value: '', disabled: true}, [Validators.required]),
    Pname: new FormControl('', [Validators.required]),
    Pprice: new FormControl('', [Validators.required]),
    Pcat: new FormControl('', [Validators.required]),
  });

  edit() {
    try {
      if (this.editForm.valid) {
        const updatedProduct = {
          ...this.editForm.value,
          Pcode: this.editForm.value.Pcode, // Include the Pcode
        };

        this.userData.editProduct(updatedProduct).subscribe(
          (response) => {
            console.warn(response);
            this.hideEditForm();
            this.displayProducts();
            this.displayCategory();
          },
          (error) => {
            console.error(error);
          }
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  delete(pro: any) {
    try {
      this.userData.deleteProduct(pro).subscribe((response) => {
        console.warn(response);
        this.displayProducts();
        this.displayCategory();
      });
    } catch (error) {
      console.error(error);
    }
  }

  allC: any;
  displayCategory() {
    this.userData.showCategory().subscribe((response) => {
      this.allC = response;
    });
  }
}
