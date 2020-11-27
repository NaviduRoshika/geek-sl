import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ComicsComponent } from './modules/comics/comics.component';
import { ArtistsComponent } from './modules/artists/artists.component';
import { HeroesComponent } from './modules/heroes/heroes.component';
import { ComicsModule } from './modules/comics/comics.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArtistsComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    ComicsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
