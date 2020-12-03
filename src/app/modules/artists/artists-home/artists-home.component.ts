import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/Models/Artist';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artists-home',
  templateUrl: './artists-home.component.html',
  styleUrls: ['./artists-home.component.sass']
})
export class ArtistsHomeComponent implements OnInit {
  artists : Artist[] = [];
  constructor(private artistService:ArtistService) { }

  ngOnInit(): void {
    this.artists = this.artistService.getArtists();
  }

  onArtistCardClick = (artistName:string)=>{

  }

}
