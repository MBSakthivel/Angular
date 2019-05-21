import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  retrieveCategories()
  {
    return this.http.get("http://localhost:8080/categories");
  }
  retrieveProduct(id){
    return this.http.get("http://localhost:3000/Products/" +id);
  }
}
