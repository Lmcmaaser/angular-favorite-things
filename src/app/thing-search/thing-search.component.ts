import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Thing } from '../thing';
import { ThingService } from '../thing.service';

@Component({
  selector: 'app-thing-search',
  templateUrl: './thing-search.component.html',
  styleUrls: [ './thing-search.component.css' ]
})
export class ThingSearchComponent implements OnInit {
    things$: Observable<Thing[]>;
    private searchTerms = new Subject<string>();
        // The searchTerms property is an RxJS Subject.
        // A Subject is a source of observable values and an Observable itself.
        // can subscribe to a Subject as you would any Observable.
        // can push values into that Observable by calling its next(value) method.
    constructor(private thingService: ThingService) {}

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.things$ = this.searchTerms
            .pipe(
                // wait 300ms after each keystroke before considering the term
                // **You'll never make requests more frequently than 300ms.
                debounceTime(300),

                // ignore new term if same as previous term
                distinctUntilChanged(),

                // switch to new search observable each time the term changes
                // cancels and discards previous search observables,
                    // returning only the latest search service observable.
                // With switchMap operator, every qualifying key event can trigger an HttpClient.get() method call.
                switchMap((term: string) => this.thingService.searchThings(term)),
            );
    }
}
//Notice the declaration ofthings$ as an Observable:
