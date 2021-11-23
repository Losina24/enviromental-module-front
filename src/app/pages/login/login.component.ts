import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  // Inputs
  email: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm ) {
    console.log('Form', f);
    
  }
}
