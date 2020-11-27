import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
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

@NgModule(
    {
        declarations:[
            ComicsComponent,
            EpisodeListComponent,
            ArtistDetailsComponent,
            ComicsHomeComponent,
            ComicComponent,
            ComicDetailsComponent
        ],
        imports:[
            BrowserModule,
            BrowserAnimationsModule,
            MatButtonModule,
            MatCardModule,
            ComicsRoutingModule,
            MatExpansionModule
        ]

    }
)
export class ComicsModule {}