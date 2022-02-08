import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // enteredUserName = NONE_TYPE;
  // enteredEmail='';
  // enteredPassword='';
  // enteredUser = NONE_TYPE;

  registerUser(){
      alert('lamepollas')
      ;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
