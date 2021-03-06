import { Component, OnInit } from '@angular/core';
import { Thing } from '../thing';
import { ThingService } from '../thing.service';

@Component({
  // metadata properties:
  selector: 'app-things', // css element selector
  templateUrl: './things.component.html', // location of the component's template file
  styleUrls: ['./things.component.css'] // location of the component's private CSS styles
})

export class ThingsComponent implements OnInit {

    things: Thing[];

    constructor(private thingService: ThingService) { }
        /*parameter simultaneously defines a private thingService property and identifies it as a ThingService injection site.*/
        /*Reserve the constructor for simple initialization such as wiring constructor parameters to properties*/

    ngOnInit() {
        this.getThings();
        /* ngOnInit() is lifecycle hook. Is called shortly after creating a component.
        A good place to put initialization logic.*/
    }

    getThings(): void {
        this.thingService.getThings()
        .subscribe(things => this.things = things);
    } // observable

}
