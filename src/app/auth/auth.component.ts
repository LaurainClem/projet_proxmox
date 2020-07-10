import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  validateForm!: FormGroup;
  realms = [];

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      realm : [null, [Validators.required]]
    });
   }

  ngOnInit(): void {
    this.authService.getRealm().subscribe(data => {
      this.realms = data;
    });
  }

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      this.authService.getAuth(this.validateForm.value.userName, this.validateForm.value.password, this.validateForm.value.realm)
    }
  }

}
