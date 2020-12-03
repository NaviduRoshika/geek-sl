import { Injectable } from '@angular/core';
import { Artist } from '../Models/Artist';
import { artists } from '../data/artists';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  artists : Artist[] = artists;

  constructor() { }

  getArtists = ()=>{
    return artists.slice();
  }
}
