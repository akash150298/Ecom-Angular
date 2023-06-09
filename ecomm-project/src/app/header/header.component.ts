import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: string = '';
  sellerName: string = '';
  constructor(private route: Router) {

  }
  ngOnInit(): void {
  
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.warn("In seller area");
               this.menuType = "seller";
               if(localStorage.getItem('seller')){
                let sellerStore = localStorage.getItem('seller');
                // console.log(sellerStore);
                 let sellerData = sellerStore && JSON.parse(sellerStore);
                 this.sellerName = sellerData[0].name
               }
        }
        else {
          console.warn("outside seller");
          this.menuType='default'
        }
      }
    })
  }
  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }


}
