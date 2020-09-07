import { Component, OnInit, Input } from '@angular/core';
import { Thing } from '../thing'

@Component({
  selector: 'app-thing-detail',
  templateUrl: './thing-detail.component.html',
  styleUrls: ['./thing-detail.component.css']
})

export class ThingDetailComponent implements OnInit {
    @Input() thing: Thing;
    constructor() { }
    ngOnInit() { }
}
