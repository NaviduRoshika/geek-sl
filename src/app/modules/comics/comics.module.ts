import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
// import { MatIconModule } from '@angular/material/icon/icon-module';
import {MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { ComicsHomeComponent } from './comics-home/comics-home.component';
import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics.component';
import { ComicComponent } from './comic/comic.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { MatExpansionModule} from '@angular/material/expansion';
import { ReadComicComponent } from './read-comic/read-comic.component';

@NgModule(
    {
        declarations:[
            ComicsComponent,
            EpisodeListComponent,
            ArtistDetailsComponent,
            ComicsHomeComponent,
            ComicComponent,
            ComicDetailsComponent,
            ReadComicComponent
        ],
        imports:[
            MatExpansionModule,
            MatCardModule,
            MatIconModule,
            BrowserModule,
            BrowserAnimationsModule,
            MatButtonModule,
            ComicsRoutingModule,
            
        ]

    }
)
export class ComicsModule {}