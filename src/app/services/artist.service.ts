import { Injectable } from '@angular/core';
import { Artist } from '../Models/Artist';
import { artists } from '../data/artists';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  artistEmitter = new BehaviorSubject<Artist>(null);

  artists : Artist[] = artists;

  constructor() { }

  getArtists = ()=>{
    return artists.slice();
  }
}
