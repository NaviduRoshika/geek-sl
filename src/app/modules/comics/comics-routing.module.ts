import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ComicComponent } from './comic/comic.component';
import { ComicsHomeComponent } from "./comics-home/comics-home.component";
import { ComicsComponent } from './comics.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { ReadComicComponent } from './read-comic/read-comic.component';

const routes = [
    {path:'comics', component:ComicsComponent,
     children:[
         {path:'', component:ComicsHomeComponent},
         {path:':comicName',component:ComicComponent},
         {path:':comicName/:issueId',component:ReadComicComponent}
     ] }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class ComicsRoutingModule{}