import { Injectable } from '@angular/core';
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
    /* getThings(): Thing[] {
        return THINGS;
    } */
    getThings(): Observable<Thing[]> {
        // TODO: send the message _after_ fetching the things
        this.messageService.add('ThingService: fetched things');
        return of(THINGS);
    }

    getThing(id: number): Observable<Thing> {
        // TODO: send the message _after_ fetching the hero
        this.messageService.add(`ThingService: fetched thing id=${id}`);
        return of(THINGS.find(thing => thing.id === id));
    }
    constructor(private messageService: MessageService) { }
    /*  parameter that declares a private messageService property.
    Angular will inject the singleton MessageService into that property when it creates the ThingService.
    This is a typical "service-in-service" scenario:
        you inject the MessageService into the HeroService which is injected into the HeroesComponent.*/
}
