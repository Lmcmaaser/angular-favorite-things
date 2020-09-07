import { Component, OnInit } from '@angular/core';
import { Thing } from '../thing';
import { ThingService } from '../thing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
    things: Thing[] = [];
    constructor(private thingService: ThingService) { }

    ngOnInit() {
      this.getThings();
    }

    getThings(): void {
      this.thingService.getThings()
        .subscribe(things => this.things = things.slice(1, 5));
        //returns the sliced list at positions 1 and 5
    }
}
