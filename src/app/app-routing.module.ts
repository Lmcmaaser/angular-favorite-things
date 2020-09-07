import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // app can have routing functionality
import { ThingsComponent } from './things/things.component';
    // gives the Router somewhere to go once you configure the routes

const routes: Routes = [
  { path: 'things', component: ThingsComponent }
];
    /* typical Angular Route has two properties:
        path: a string that matches the URL in the browser address bar.
        component: the component that the router should create when navigating to this route.
    */

@NgModule({ // initializes the router and starts it listening for browser location changes
  imports: [RouterModule.forRoot(routes)],
    /* forRoot() method supplies the service providers and directives needed for routing, 
    and performs the initial navigation based on the current browser URL*/
  exports: [RouterModule]
})
export class AppRoutingModule { }
