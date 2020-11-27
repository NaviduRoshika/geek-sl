import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comic } from 'src/app/Models/Comic';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-comics-home',
  templateUrl: './comics-home.component.html',
  styleUrls: ['./comics-home.component.sass','../comics.component.sass']
})
export class ComicsHomeComponent implements OnInit {
  comics :Comic[] = [];
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private comicsService : ComicService) { }

  ngOnInit(): void {
    this.comics =  this.comicsService.getComicSet();
    console.log("comic came",this.comics);
  }

  onComicCardClick(comicName:string){
     console.log(comicName);
     this.router.navigate([comicName],{relativeTo:this.activatedRoute});

  }

}
