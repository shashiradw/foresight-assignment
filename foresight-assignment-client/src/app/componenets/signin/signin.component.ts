import { Component, OnInit } from '@angular/core';
import { SigninService } from 'src/app/services/signin.service';
import { UserLogin } from 'src/UserLogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isInValidLogin: boolean = false;
  constructor(private signInService : SigninService,private router: Router ) { }

  ngOnInit(): void {
  }

  login(user : UserLogin ){
    this.signInService.signIn(user).subscribe(
      (isValid)=>{
        var isTrue = (isValid === 'true');
        this.isInValidLogin=!isTrue;
        // console.log('Valid',isValid);
        if(isTrue){
          //Redirect to the home
          this.router.navigateByUrl('/home');

        }
      }
    );
  }

}
