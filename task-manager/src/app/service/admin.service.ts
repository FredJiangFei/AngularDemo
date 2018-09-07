import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../domain/role.domain';
import { environment } from '../../environments/environment';


@Injectable()
export class AdminService {

    constructor(private http: HttpClient) {

    }

    getRoles() {
       return this.http.get<string[]>(`${environment.baseUrl}/admin/roles`);
    }
}
