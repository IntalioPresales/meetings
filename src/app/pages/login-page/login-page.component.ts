import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  angForm: FormGroup;
  constructor(private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      last:['',Validators.required]
   });
  }
  submitLogin(firstname,lastname){
    if (this.angForm.invalid) {
      return;
  }
    if(firstname=='Secretary'){
      this.router.navigate(['/home']);
    }
    else if(firstname=='Member'){
      this.router.navigate(['/dashboard-member']);
    }
}

}
