import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Thing } from './thing';
import { THINGS } from './dummy-data';
import { Observable, of } from 'rxjs'; // a class from RxJS library
import { MessageService } from './message.service';

@Injectable({ /* marks the class as one that participates in the dependency injection system
and accepts a metadata object for the service*/
  providedIn: 'root' /* provides the service at the root level which lets Angular create a single,
shared instance of ThingService and inject it into any class that asks for it*/
})
export class ThingService {

    /** GET heroes from the server */
    getThings(): Observable<Thing[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
    }

    getThing(id: number): Observable<Thing> {
        // TODO: send the message _after_ fetching the hero
        this.messageService.add(`ThingService: fetched thing id=${id}`);
        return of(THINGS.find(thing => thing.id === id));
    }
    constructor(
        private http: HttpClient,
        private heroesUrl = 'api/heroes',  // URL to web api
        /** Log a ThingService message with the MessageService...b/c it gets called so frequently */
        private log(message: string) {
            this.messageService.add(`ThingService: ${message}`);
        }
    )
    /*  parameter that declares a private messageService property.
    Angular will inject the singleton MessageService into that property when it creates the ThingService.
    This is a typical "service-in-service" scenario:
        you inject the MessageService into the HeroService which is injected into the HeroesComponent.*/
}
