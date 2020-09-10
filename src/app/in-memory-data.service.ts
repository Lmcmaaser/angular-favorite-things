import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Thing } from './thing';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const things = [
            { id: 11, name: 'doggos' },
            { id: 12, name: 'cats' },
            { id: 13, name: 'tea' },
            { id: 14, name: 'coffee' },
            { id: 15, name: 'baked goods' },
            { id: 16, name: 'books' },
            { id: 17, name: 'plants' },
            { id: 18, name: 'rain' },
            { id: 19, name: 'a breeze' },
            { id: 20, name: 'apples' }
        ];
        return {things};
    }

    genId(things: Thing[]): number {
        return things.length > 0 ? Math.max(...things.map(thing => thing.id)) + 1 : 11;
    }
    // Overrides the genId method to ensure that a thing always has an id.
    // If array is empty the method below returns the initial number (11).
    // if array is not empty, the method below returns the highest id + 1.
}
