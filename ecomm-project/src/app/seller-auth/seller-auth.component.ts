import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { login, SignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
       
  constructor(private seller: SellerService, private router: Router) { }
  showLogin = false;
  authError = "";

  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  signUp(data: SignUp): void {
    this.seller.userSignUp(data)
  }
  login(data: login): void {
         this.seller.userLogin(data)
         this.seller.isLoginError.subscribe((isError)=>{
        if(isError){
              this.authError = "Email or Password is not correct"
        }
        else{
          
        }
     })
  }
 
  openLogin()
  {
     this.showLogin = true;
  }
  openSignup()
  {
    this.showLogin = false;
  }
}
