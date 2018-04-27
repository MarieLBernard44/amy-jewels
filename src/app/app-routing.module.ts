import { Routes, RouterModule } from '@angular/router';

// Import des components
import { EnterComponent } from './pages/enter/enter.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ConceptComponent } from './pages/concept/concept.component';
import { LabEnterComponent } from './pages/personnalisation/lab-enter/lab-enter.component';
import { LabTypeComponent } from './pages/personnalisation/lab-type/lab-type.component';
import { LabAppretsComponent } from './pages/personnalisation/lab-apprets/lab-apprets.component';
import { LabPatternComponent } from './pages/personnalisation/lab-pattern/lab-pattern.component';
import { GridComponent } from './pages/personnalisation/grid/grid.component';
import { LabRecapitulatifComponent } from './pages/personnalisation/lab-recapitulatif/lab-recapitulatif.component';
import { InstagramComponent } from './pages/instagram/instagram.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { RegisterComponent } from './pages/authentication/register/register.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'amyJ',
        pathMatch: 'full'
    },
    {
        path: 'amyJ',
        component: EnterComponent,
    },
    {
        path: 'page',
        component: MenuComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'login',
                component: AuthenticationComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'mon-compte',
                component: AuthenticationComponent
            },
            {
                path: 'concept',
                component: ConceptComponent
            },
            {
                path: 'lab',
                component: LabEnterComponent
            },
            {
                path: 'lab/type',
                component: LabTypeComponent
            },
            {
                path: 'lab/apprets',
                component: LabAppretsComponent
            },
            {
                path: 'lab/pattern',
                component: LabPatternComponent
            },
            {
                path: 'lab/personnalisation',
                component: GridComponent,
            },
            {
                path: 'lab/recapitulatif',
                component: LabRecapitulatifComponent
            },
            {
                path: 'instagram',
                component: InstagramComponent
            }
        ]
    },

];

export const Routing = RouterModule.forRoot(appRoutes);
