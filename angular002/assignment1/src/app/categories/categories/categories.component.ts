import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service'
import{ActivatedRoute} from '@angular/router'
import {Router} from "@angular/router"

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any = [];
  constructor(private productService: ProductServiceService,private activatedRoute:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    //console.log(this.productService.retrieveCategories());
    this.productService.retrieveCategories().subscribe((data) => {
      console.log(data)
      this.categories = data;
      ;
    })
    console.log(this.categories);
  }

  getproduct=function(categoryId){
    console.log("getproduct");
    this.route.navigate(["/consumeProduct/:id"]);
    
  }

}
