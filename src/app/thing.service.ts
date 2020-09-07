import { Injectable } from '@angular/core';
import { Thing } from './thing';
import { THINGS } from './dummy-data';

@Injectable({ /* marks the class as one that participates in the dependency injection system
and accepts a metadata object for the service*/
  providedIn: 'root' /* provides the service at the root level which lets Angular create a single,
shared instance of ThingService and inject it into any class that asks for it*/
})
export class ThingService {
    getThings(): Thing[] {
        return THINGS;
    }
    constructor() { }
}
