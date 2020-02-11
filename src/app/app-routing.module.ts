import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ProductComponent } from './pages/product/product.component';


const routes: Routes = [
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full"
	}, {
		path: "home",
		component: HomeComponent
	}, {
		path: "products",
		component: ProductComponent
	},{
		path: "contact",
		component: ContactComponent
	}, {
		path: "auth",
		component: AuthComponent,
		children: [{
			path: '',
			loadChildren: './pages/auth/auth.module#AuthModule'
		}], 
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
