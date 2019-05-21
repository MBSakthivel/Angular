import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router"
import { ProductServiceService } from 'src/app/service/product-service.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private remote:ProductServiceService, private activeRoute:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.remote.retrieveProduct(this.activeRoute.snapshot.params.id).subscribe((data)=>{
      
      console.log(data);
      
    })
  }

}
