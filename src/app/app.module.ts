import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetriNetComponent } from './petri-net/petri-net.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { PetriService } from './service/petri.service';

@NgModule({
  declarations: [
    AppComponent,
    PetriNetComponent
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
