import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ThingService } from '../thing.service';
import { Thing } from '../thing'

@Component({
  selector: 'app-thing-detail',
  templateUrl: './thing-detail.component.html',
  styleUrls: ['./thing-detail.component.css']
})

export class ThingDetailComponent implements OnInit {
    @Input() thing: Thing;
    constructor(
        private route: ActivatedRoute, // holds information about the route
        private thingService: ThingService, // gets thing data from the remote server
        private location: Location // Angular service for interacting with the browser
    ) { }
    ngOnInit() {
        this.getThing();
    }
    getThing(): void {
        const id = +this.route.snapshot.paramMap.get('id');
            //  paramMap is a dictionary of route parameter values extracted from the URL
            // Route parameters are always strings.
        this.thingService.getThing(id)
            .subscribe(thing => this.thing = thing);
    }
    goBack(): void {
        this.location.back();
    }
}
