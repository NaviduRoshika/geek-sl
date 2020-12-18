import { AddNewComicComponent } from './add-new-comic/add-new-comic.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes :Routes = [
  {path:'admin',
   component:AdminComponent,
   children:[
     {path:'',component:AdminHomeComponent},
     {path:'addNewComic',component:AddNewComicComponent}
   ]}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AdminRoutingModule{}
