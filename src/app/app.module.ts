import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthComponent } from './pages/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shares/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { TestComponent } from './test/test.component';
import { ProductComponent } from './pages/product/product.component';


@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		NavbarComponent,
		FooterComponent,
		HomeComponent,
		ContactComponent,
		AuthComponent,
		TestComponent,
		ProductComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MaterialModule,
		ReactiveFormsModule,
		FormsModule
	],
	

	providers: [
		ApiService,
		AuthService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
