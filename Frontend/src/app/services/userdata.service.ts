import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor(private http: HttpClient) {}
  authToken: any;
  tokenSet = false;
  private billData: any = [];

  //Create User
  saveUser(data: any): Observable<any> {
    debugger
    return this.http.post<any>(`${baseURL}signup`, data);
  }
  //Check User on Login
 loginUser(data: any): Observable<any> {
  debugger
  return this.http.post(`${baseURL}login`, data)
    .pipe(
      map((response:any) => {
        if (response && response.token) {
          this.authToken = response.token;
        }
        return response;
      })
    );
}

// Function to get the saved token
setToken(token: string) {
  localStorage.setItem(this.authToken, token);
}

getToken(): string | null {
  return localStorage.getItem('Token');
}

clearToken() {
  localStorage.removeItem(this.authToken);
}

islogin(): boolean {
  return !!this.authToken;
}
  //Add new Product
  addProduct(data: any): Observable<any> {
    return this.http.post(`${baseURL}product`, data);
  }
  //Display All products
  showProduct(): Observable<any> {
    return this.http.get(`${baseURL}showproducts`);
  }
  //Add new Category
  addCategory(data: any): Observable<any> {
    return this.http.post(`${baseURL}category`, data);
  }
  //Display All categories
  showCategory(): Observable<any> {
    return this.http.get(`${baseURL}showcategory`);
  }

  //Edit Product
  editProduct(data:any):Observable<any>{
    return this.http.put(`${baseURL}edit`,data);
  }

  deleteProduct(data:any):Observable<any>{
    return this.http.post(`${baseURL}delete`,data);
  }
  catProduct(data:any): Observable<any> {
    return this.http.post(`${baseURL}showproductss`,data);
  }
  oneProduct(data:any): Observable<any> {
    return this.http.post(`${baseURL}oneproduct`,data);
  }
  

  setBillData(data: any) {
    this.billData = data;
  }

  getBillData() {
    return this.billData;
  }
}