import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThingsComponent } from './things/things.component';
import { ThingDetailComponent } from './thing-detail/thing-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ThingsComponent,
        ThingDetailComponent,
        MessagesComponent,
        DashboardComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
