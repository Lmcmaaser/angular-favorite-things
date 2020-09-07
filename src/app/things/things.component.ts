import { Component, OnInit } from '@angular/core';
import { Thing } from '../thing';
// import { THINGS } from '../dummy-data';
import { ThingService } from '../thing.service';

@Component({
  // metadata properties:
  selector: 'app-things', // css element selector
  templateUrl: './things.component.html', // location of the component's template file
  styleUrls: ['./things.component.css'] // location of the component's private CSS styles
})
export class ThingsComponent implements OnInit {

    //things = THINGS;
    things: Thing[];
    selectedThing: Thing;
    constructor() { }
    ngOnInit() { }
    /* ngOnInit() is lifecycle hook. Is called shortly after creating a component.
    A good place to put initialization logic.*/
    onSelect(thing: Thing): void {
        this.selectedThing = thing;
    }

}
