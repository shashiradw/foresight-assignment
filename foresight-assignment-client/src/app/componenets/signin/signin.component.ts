import { Component, OnInit } from '@angular/core';
import { SigninService } from 'src/app/services/signin.service';
import { UserLogin } from 'src/UserLogin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isInValidLogin: boolean = false;
  constructor(private signInService : SigninService) { }

  ngOnInit(): void {
  }

  login(user : UserLogin ){
    this.signInService.signIn(user).subscribe(
      (isValid)=>{
        var isTrue = (isValid === 'true');
        this.isInValidLogin=!isTrue;
      }
    );
  }

}
