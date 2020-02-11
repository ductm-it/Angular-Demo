import { Component, OnInit } from '@angular/core';
import { MenuInterface } from 'src/app/intefaces/menu.interface';



@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	
	menus: MenuInterface[] = [
		{ icon: "dashboard", path: "/home", label: "Dashboard" },
		{ icon: "contacts", path: "/contact", label: "Contact Us" },
		{ icon: "view_array", path: "/products", label: "Products"},
		{ icon: "group", path: "/auth/login", label: "Login" },
	];

	ngOnInit() {

	}

}
