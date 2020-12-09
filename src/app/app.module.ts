import { AdminModule } from './modules/admin/admin.module';
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
import { ArtistsModule } from './modules/artists/artists.module';
import { AdminComponent } from './modules/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    ComicsModule,
    ArtistsModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
