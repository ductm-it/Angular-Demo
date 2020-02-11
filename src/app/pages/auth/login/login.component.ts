import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  username: FormControl;
  password: FormControl;
  constructor(
		private authService: AuthService
  )
  {
    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
		this.formGroup = new FormGroup({
      username: this.username,
      password: this.password
		});
	}

  ngOnInit() {
    console.log("onnit");
  }
  onSubmit(){
    // console.log(this.formGroup.getRawValue());
    this.authService.login(this.formGroup.getRawValue()).subscribe(data => {
      console.log(data);
			this.authService.setSession(data);
		}, err => {
			console.log(err);
		})
  }

}
