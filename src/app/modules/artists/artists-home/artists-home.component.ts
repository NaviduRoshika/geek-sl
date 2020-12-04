import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/Models/Artist';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artists-home',
  templateUrl: './artists-home.component.html',
  styleUrls: ['./artists-home.component.sass']
})
export class ArtistsHomeComponent implements OnInit {
  artists : Artist[] = [];
  constructor(private router:Router,private route:ActivatedRoute,private artistService:ArtistService) { }

  ngOnInit(): void {
    this.artists = this.artistService.getArtists();
  }

  onArtistCardClick = (artist:Artist)=>{
    console.log(artist,"emitted");
    this.artistService.artistEmitter.next(artist);
    this.router.navigate([artist.name],{relativeTo:this.route});
  }

}
