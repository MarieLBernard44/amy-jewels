/////////////////////////////////////    ANGULAR    //////////////////////////////////////////////////////////////
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

/////////////////////////////////////    COMPONENTS    //////////////////////////////////////////////////////////////
import { AppComponent } from './app.component';
import { EnterComponent } from './pages/enter/enter.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ConceptComponent } from './pages/concept/concept.component';
import { LabStepMenuComponent } from './pages/personnalisation/lab-step-menu/lab-step-menu.component';
import { LabEnterComponent } from './pages/personnalisation/lab-enter/lab-enter.component';
import { LabTypeComponent } from './pages/personnalisation/lab-type/lab-type.component';
import { LabAppretsComponent } from './pages/personnalisation/lab-apprets/lab-apprets.component';
import { LabPatternComponent } from './pages/personnalisation/lab-pattern/lab-pattern.component';
import { GridComponent } from './pages/personnalisation/grid/grid.component';
import { LabRecapitulatifComponent } from './pages/personnalisation/lab-recapitulatif/lab-recapitulatif.component';
import { InstagramComponent } from './pages/instagram/instagram.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GridComponent,
    AppComponent,
    EnterComponent,
    MenuComponent,
    HomeComponent,
    ConceptComponent,
    LabStepMenuComponent,
    LabEnterComponent,
    LabTypeComponent,
    LabAppretsComponent,
    LabPatternComponent,
    LabRecapitulatifComponent,
    InstagramComponent,

  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
