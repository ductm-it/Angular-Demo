import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ResponseData } from '../models/response-data.model';

@Injectable()
export class ApiService {
    apiUrl: string = environment.apiUrl;
    constructor(private http: HttpClient) {

    }

    getHeader(): HttpHeaders {
        let token = localStorage.getItem("token");
        let obj = {
            'Content-Type': 'application/json'
        };
        if (token) obj['Authorization'] = 'Bearer ' + token;
        let headers = new HttpHeaders(obj);
        return headers;
    }

    login(userData: { username: string, password: string }): Observable<ResponseData<{ token: string }>> {
        return this.post<{ token: string }>('user/signin', userData);
    }


    post<T>(url: string, body: { [key: string]: any } = {}): Observable<ResponseData<T>> {
        return this.http.post<ResponseData<T>>(this.apiUrl + url, body, { headers: this.getHeader() }).pipe(first());
    }

    get<T>(url: string): Observable<ResponseData<T>> {
        return this.http.get<ResponseData<T>>(this.apiUrl + url, { headers: this.getHeader() }).pipe(first());
    }

    create<T>(entityName: string, data: { [key: string]: any }): Observable<ResponseData<T>> {
        return this.post<T>(entityName + "/create", data);
    }

}