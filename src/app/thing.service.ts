import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // a class from RxJS library
import { Thing } from './thing';
import { THINGS } from './dummy-data';
import { MessageService } from './message.service';

/* marks the class as one that participates in the dependency injection system
and accepts a metadata object for the service*/
/* provides the service at the root level which lets Angular create a single,
shared instance of ThingService and inject it into any class that asks for it*/
@Injectable({ providedIn: 'root' })
export class ThingService {

    constructor(private messageService: MessageService) { }

    /** GET things from the server */
    getThings(): Observable<Thing[]> {
        // TODO: send the message _after_ fetching the heroes
        // this.messageService.add('ThingService: fetched things');
            return of(THINGS);
    }

    /** GET thing by id. Will 404 if id not found */
    getThing(id: number): Observable<Thing> {
        this.messageService.add(`ThingService: fetched thing id=${id}`);
        return of(THINGS.find(thing => thing.id === id));
    }


    /** Log a ThingService message with the MessageService...b/c it gets called so frequently */
    private log(message: string) {
        this.messageService.add(`ThingService: ${message}`);
    }
}
