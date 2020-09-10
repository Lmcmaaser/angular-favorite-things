import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
    // In-memory Web API module has nothing to do with HTTP in Angular.
    // in this app it mimics communication with a remote data server
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ThingsComponent } from './things/things.component';
import { ThingDetailComponent } from './thing-detail/thing-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThingSearchComponent } from './thing-search/thing-search.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        ),
    ],
    declarations: [
        AppComponent,
        ThingsComponent,
        ThingDetailComponent,
        MessagesComponent,
        DashboardComponent,
        ThingSearchComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
