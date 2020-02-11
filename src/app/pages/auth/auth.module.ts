import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
	declarations: [
		RegisterComponent,
		LoginComponent
	],
	imports: [
		AuthRoutingModule,
	],
	providers: [],
	bootstrap: []
})
export class AuthModule { }
