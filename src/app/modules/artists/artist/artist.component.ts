import { Router } from '@angular/router';
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
  blankImage:string = "https://lymediseaseuk.com/wp-content/uploads/2015/10/blank-profile-picture-973460_640.png";

  constructor(private artistService:ArtistService,private router:Router) {
    console.log("art0");
    this.subscription =  this.artistService.artistEmitter.subscribe(a => console.log(a,"art2"));
    this.artist.image = this.blankImage;
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

  onWorkCardClick(workName:string):void{
       this.router.navigate(["comics",workName]);
  }

}
