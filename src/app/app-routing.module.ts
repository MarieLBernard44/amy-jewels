import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './pages/grid/grid.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'grid',
        pathMatch: 'full'
    },
    {
        path: 'grid',
        component: GridComponent,
    }
];

export const Routing = RouterModule.forRoot(appRoutes);
