/////////////////////////////////////    ANGULAR    //////////////////////////////////////////////////////////////
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app-routing.module';


/////////////////////////////////////    COMPONENTS    //////////////////////////////////////////////////////////////
import { GridComponent } from './pages/grid/grid.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    GridComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    Routing,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
