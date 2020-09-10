import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // app can have routing functionality

// gives the Router somewhere to go once you configure the routes:
import { ThingsComponent } from './things/things.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThingDetailComponent } from './thing-detail/thing-detail.component';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // makes app navigate to dashboard automatically
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: ThingDetailComponent }, // parameterized route
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
