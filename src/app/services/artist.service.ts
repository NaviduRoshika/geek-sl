import { Injectable } from '@angular/core';
import { Artist } from '../Models/Artist';
import { artists } from '../data/artists';
import { BehaviorSubject, Subject } from 'rxjs';
import { ComicService } from './comic.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  artistEmitter = new BehaviorSubject<Artist>(null);

  artists : Artist[] = artists;

  constructor(private comicService:ComicService) { }

  getArtists = ()=>{
    return artists.slice();
  }

  getArtistWorks = (name:string) =>{
    const images = this.comicService.getComicImageByAuthorName(name);
    console.log(images,name);
    
    return images;
  }
}
