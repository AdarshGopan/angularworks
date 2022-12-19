import { Component,OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{
  constructor(private service:StoreService){}
  ngOnInit(): void {
    // this.service.getProductDetails().then(res=>res.json()).then(data=>console.log(data)
    )
  }

}
