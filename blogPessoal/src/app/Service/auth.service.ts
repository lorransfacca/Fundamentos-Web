import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from '../model/User';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient
    ) { }

    entrar(userLogin): Observable<UserLogin>{
        return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar',userLogin)
    }

    cadastrar() {
        return this.http.post<UserLogin>('http://localhost:8080/usuarios/cadastrar',user)

    }
}