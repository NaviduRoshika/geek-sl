import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { ArtistsHomeComponent } from './artists-home/artists-home.component';
import { ArtistsComponent } from './artists.component';

const routes : Routes = [
    {path:'artists',
     component:ArtistsComponent,
     children:[
         {path:'',component:ArtistsHomeComponent},
         {path:':artistName',component:ArtistComponent}
     ]}
];
@NgModule(
    {
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule]
    }
)

export class ArtistsRoutingModule{}