import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {

	formGroup: FormGroup;
	descriptionControl: FormControl;

	constructor(
		private apiService: ApiService
	) {
		this.descriptionControl = new FormControl('', [Validators.required]);
		this.formGroup = new FormGroup({
			description: this.descriptionControl
		});
	}

	onSubmit() {
		console.log(this.formGroup.getRawValue());
		this.apiService.create<any>("product", this.formGroup.getRawValue()).subscribe((data) => {
			console.log(data);
		}, (err) => {
			console.log({ err });
		});
	}

	
	ngOnInit(): void {
		this.apiService.get<any>("product/7").subscribe(t => {
			this.formGroup.patchValue(t.data);
		}, (err) => {
			console.log({ err });
		});
	}

	ngAfterViewInit(): void {

	}

}