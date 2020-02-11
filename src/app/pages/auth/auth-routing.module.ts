import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';


const routes: Routes = [
	{
		path: "",
		redirectTo: "login",
		pathMatch: "full"
	}, {
		path: "login",
		component: LoginComponent
	}, {
		path: "register",
		component: RegisterComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule, MatFormFieldModule,MatInputModule , ReactiveFormsModule ]
})
export class AuthRoutingModule { }
