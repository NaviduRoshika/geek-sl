import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddNewComicComponent } from './add-new-comic/add-new-comic.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations:[AdminComponent,AdminHomeComponent, AddNewComicComponent],
  imports:[
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AdminRoutingModule]
})
export class AdminModule{}
