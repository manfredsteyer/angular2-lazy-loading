import { Injectable, Inject } from '@angular/core';
import { Observable} from 'rxjs';
import {Flug} from "../../../entities/flug";
import { Http, Headers, URLSearchParams} from '@angular/http';

@Injectable()
export class FlugService {

    constructor(
        @Inject("BASE_URL") private baseUrl: string,
        private http: Http) {
    }

    fluege: Array<Flug> = [];

    find(von: string, nach: string): Observable<Flug[]> {

        let search = new URLSearchParams();
        let url = this.baseUrl + "/api/flug";

        search.set('abflugort', von);
        search.set('zielort', nach);

        let headers = new Headers();
        headers.set('Accept', 'text/json');

        return this.http
                    .get(url, { search, headers })
                    .map(resp => resp.json())
                    .do(fluege => {
                        this.fluege = fluege;
                    });

    }

}