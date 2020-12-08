import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Artist } from 'src/app/Models/Artist';
import { ArtistService } from 'src/app/services/artist.service';

@Component({ 
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.sass']
})
export class ArtistComponent implements OnInit,OnDestroy{

  artist:Artist ={name:"",about:"xxx",type:"",image:"",works:[]};
  subscription:Subscription;
  workImages;
  constructor(private artistService:ArtistService) {
    console.log("art0");
    this.subscription =  this.artistService.artistEmitter.subscribe(a => console.log(a,"art2"));
   }

  ngOnInit(): void {
    console.log("art1");
    this.subscription =  this.artistService.artistEmitter.subscribe((a:Artist)=>{
        this.artist = a;
        this.workImages = this.artistService.getArtistWorks(a.name);
        console.log(a,"art2", this.artistService.getArtistWorks(a.name));
      });
  
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
