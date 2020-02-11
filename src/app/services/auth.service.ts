import { UserModel } from '../models/user.model';
import { Injectable } from '@angular/core';
import { ResponseData } from '../models/response-data.model';
import { ApiService } from './api.service';

@Injectable()
export class AuthService {

    public static currentUser: UserModel = null;

    constructor(private apiService: ApiService) {

    }

    login(user: {username: string, password: string}) {
        return this.apiService.login(user);
    }

    setSession(res: ResponseData<{ token: string }>) {
        localStorage.setItem('token', res.data.token);
        this.isLoggedIn();
    }

    logout() {
        localStorage.removeItem("token");
    }

    isLoggedIn() {
        let token = this.getToken();
        if (token) {
            try {
                let payload = this.parseJwt(token);
                if (payload.exp * 1000 <= (new Date()).getTime()) {
                    return false;
                } else {
                    AuthService.currentUser = new UserModel(payload.sub, payload.userRole);
                    return true;
                }
            } catch (ex) {
                console.log(ex);
                return false;
            }
        } else {
            return false;
        }
    }

    getToken(): string {
        return localStorage.getItem("token");
    }

    b64DecodeUnicode(str) {
        return decodeURIComponent(
            Array.prototype.map.call(atob(str), c =>
                '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            ).join(''));
    }

    parseJwt(token) {
        return JSON.parse(
            this.b64DecodeUnicode(
                token.split('.')[1].replace('-', '+').replace('_', '/')
            )
        );
    }

}