import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

	requestPage: {
		"pageNumber": number,
		"pageSize": number,
		"searchString": string
	}
	ELEMENT_DATA: PeriodicElement[];
	displayedColumns: string[] = ['createdBy', 'createdDate', 'changedBy', 'changedDate', 'productId', 'description', 'createdUser'];
	// dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
	dataSource: MatTableDataSource<PeriodicElement>;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	constructor(private apiService: ApiService) {
		this.requestPage = { pageNumber: 1, pageSize: 10, searchString: " " };
	}
	ngOnInit() {
		this.apiService.post<any>("product/get-page", this.requestPage).subscribe((data) => {
			this.ELEMENT_DATA = data.data.records;
			this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
			this.dataSource.paginator = this.paginator;
			console.log(data);
		});
	}
}
export interface PeriodicElement {
	createdBy: number;
	createdDate: number;
	changedBy: number;
	changedDate: number;
	productId: number;
	description: string;
	createdUser: string;
}

// const ELEMENT_DATA: PeriodicElement[] =[
// 	{ createdBy: 0, createdDate: 1, changedBy: 0, changedDate: 10, productId: 4, description: "Ebook", createdUser: null}
// ];

