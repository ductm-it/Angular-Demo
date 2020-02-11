import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
	createdDate: number;
	productId: number;
	description: string;

  }

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{


	requestPage: {
		"pageNumber": number,
		"pageSize": number,
		"searchString": string
	}
	ELEMENT_DATA: PeriodicElement[];
	displayedColumns: string[] = ['pro_id', 'description', 'created_date'];
	dataSource: MatTableDataSource<PeriodicElement>;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	constructor(private apiService: ApiService) {
		this.requestPage = { pageNumber: 1, pageSize: 10, searchString: " " };
	}
	ngOnInit(): void {
		this.apiService.post<any>("contact/get-page", this.requestPage).subscribe((data) => {
					this.ELEMENT_DATA = data.data.records;
					this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
					this.dataSource.paginator = this.paginator;
					console.log(data);
				});
	}
}
