import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { Observable } from 'rxjs';

// tslint:disable-next-line:no-empty-interface
interface User {}

@Injectable()
export class UserService {
    public api = 'https://api.github.com/users';

    constructor( private http: HttpClient ) {
        console.log('Succesfully Accessed Github Users Api');
    }

    getUser(user): Observable<User[]> {
        return this.http.get<User[]>(`${this.api}/${user}/repos`);
    }
}
