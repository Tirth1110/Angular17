import { Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { Routing1Component } from './routing1/routing1.component';
import { Routing2Component } from './routing2/routing2.component';
import { NotFoundComponent } from './not-found/not-found.component';

const titlePreFix = 'Angular 17.0  '
export const routes: Routes = [
    {
        path: 'directives',
        component: DirectivesComponent
    },
    {
        path: 'routing-1',
        component: Routing1Component,
        title: titlePreFix + 'Routing 1',
    },
    {
        path: 'routing-2',
        component: Routing2Component,
        title: titlePreFix + 'Routing 2'
    },
    {
        path: 'routing-2-new',
        component: Routing2Component,
        outlet  : 'outlet2'
    },
    {
        path: 'routing-2-new/:id',
        component: Routing2Component,
        outlet  : 'outlet2'
    },
    {
        path: '**',
        component : NotFoundComponent,
        title: titlePreFix + 'Not Found'
    }
];
