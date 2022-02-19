import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(),
      img: new FormControl(),
      categoryname: new FormControl(),
      details: new FormControl()
    });
  }

  addProduct(){
    let product = {
      name: this.productForm.value.name,
      img: this.productForm.value.img,
      categoryname: this.productForm.value.categoryname,
      details: this.productForm.value.details
    }
      this.service.addProduct(product).subscribe((res)=>{
        console.log(res);
        if(res.msg="Add a product complete."){
          window.alert("Add Complete");
          this.router.navigate(["/product"]);
        }else{
          window.alert("Add Not Complete !");
          this.router.navigate(["/product/new"]);
        }
      });
  }

}
