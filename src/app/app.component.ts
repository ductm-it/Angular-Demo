import { Component, OnDestroy, ChangeDetectorRef, ViewChild, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { AuthService } from './services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {

	mobileQuery: MediaQueryList;
	@ViewChild(MatSidenav, { static: true }) matSidenav: MatSidenav;


	private _mobileQueryListener: () => void;

	constructor(private authService: AuthService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnInit(): void {
		// this.authService.login("admin", "Abc@@123").subscribe(data => {
		// 	this.authService.setSession(data);
		// }, err => {
		// 	console.log(err);
		// })
		this.matSidenav.toggle();
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

}
