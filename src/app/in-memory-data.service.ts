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

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
