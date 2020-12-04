import { NgModule } from '@angular/core';
import { ArtistsHomeComponent } from './artists-home/artists-home.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistsRoutingModule } from './artists-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ArtistsComponent } from './artists.component';

@NgModule(
    {
        declarations:[ArtistsComponent,ArtistsHomeComponent, ArtistComponent],
        imports:[
            MatExpansionModule,
            MatCardModule,
            MatIconModule,
            BrowserModule,
            BrowserAnimationsModule,
            MatButtonModule,
            ArtistsRoutingModule
        ],
        entryComponents:[]
    }
)
export class ArtistsModule{}