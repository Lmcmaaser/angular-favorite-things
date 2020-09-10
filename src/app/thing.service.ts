import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Thing } from './thing';
import { THINGS } from './dummy-data';
import { Observable, of } from 'rxjs'; // a class from RxJS library
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({ /* marks the class as one that participates in the dependency injection system
and accepts a metadata object for the service*/
  providedIn: 'root' /* provides the service at the root level which lets Angular create a single,
shared instance of ThingService and inject it into any class that asks for it*/
})
export class ThingService {

    /** GET things from the server */
    getThings(): Observable<Thing[]> {
        return this.http.get<Thing[]>(this.thingsUrl)
        .pipe( //pipe puts the observable result (an array of things) into catchError() operator
            tap(_ => this.log('fetched things')),
            catchError(this.handleError<Thing[]>('getThings', []))
        );
    }

    /** GET thing by id. Will 404 if id not found */
    getThing(id: number): Observable<Thing> {
        const url = `${this.thingsUrl}/${id}`;
        return this.http.get<Thing>(url)
        .pipe(
            tap(_ => this.log(`fetched thing id=${id}`)),
            catchError(this.handleError<Hero>(`getThing id=${id}`))
      );
    }

    /** PUT: update the hero on the server */
    updateThing(thing: Thing): Observable<any> {
        return this.http.put(this.thingsUrl, thing, this.httpOptions)
        .pipe(
            tap(_ => this.log(`updated thing id=${thing.id}`)),
            catchError(this.handleError<any>('updateThing'))
        );
    }
    constructor(
        private http: HttpClient,
        /** Log a ThingService message with the MessageService...b/c it gets called so frequently */
        private log(message: string) {
            this.messageService.add(`ThingService: ${message}`);
        },
        private heroesUrl = 'api/heroes';  // URL to web api

        private handleError<T>(operation = 'operation', result?: T) {
          return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
        /*
         * Handle Http operation that failed.
         * Let the app continue.
         * @param operation - name of the operation that failed
         * @param result - optional value to return as the observable result
         */
    )
}
