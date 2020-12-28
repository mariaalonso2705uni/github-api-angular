import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { Observable } from 'rxjs';

// tslint:disable-next-line:no-empty-interface
interface Organization {}

@Injectable()
export class OrganizationService {
    public api = 'https://api.github.com/orgs';

    constructor( private http: HttpClient ) {
        console.log('Succesfully Accessed Github Orgaization Api');
    }

    getOrganization(organization): Observable<Organization[]> {
        return this.http.get<Organization[]>(`${this.api}/${organization}`);
    }
}
