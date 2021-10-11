import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserLogin } from 'src/UserLogin';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() login : EventEmitter<UserLogin> = new EventEmitter(); 

  name: string ='';
  pwd : string ='';
  emptyName : boolean =false;
  emptyPwd : boolean =false;
  invalidUser : boolean =false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(login :any){

    //Check password || username empty
    if(this.name === ''){
      this.emptyName = ! this.emptyName;
      return;
    }
    if(this.pwd === ''){
        this.emptyPwd = ! this.emptyPwd;
        return;
    }

    this.login.emit({
      "username" : this.name,
      "password" : this.pwd
    });
    // console.log(login , this.name, this.pwd);
    

  }

}
