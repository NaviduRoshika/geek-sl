import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ArtistsComponent } from './modules/artists/artists.component';
import { ComicsComponent } from './modules/comics/comics.component';
import { HeroesComponent } from './modules/heroes/heroes.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'comics',component:ComicsComponent},
  {path:'artists',component:ArtistsComponent},
  {path:'heroes',component:HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
