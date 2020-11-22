import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.sass']
})
export class ComicsComponent implements OnInit {
 
  constructor() { }
  
  ngOnInit(): void {}

  comics = [
    {
      name:"The Flash",
      imageUrl:"https://can-of-worms.co.uk/5645-large_default/the-flash-comic-book-wooden-wall-plaque.jpg"
    },
    {
      name:"Batman",
      imageUrl:"https://i.etsystatic.com/9313766/r/il/95d3b7/1421574236/il_570xN.1421574236_jv7v.jpg"
    },
    {
      name:"Avengers",
      imageUrl:"https://thumbs.dreamstime.com/b/cute-artist-cartoon-character-job-concept-cute-artist-cartoon-character-job-concept-166872542.jpg"
    },
    {
      name:"Naruto",
      imageUrl:"https://thumbs.dreamstime.com/b/cute-artist-cartoon-character-job-concept-cute-artist-cartoon-character-job-concept-166872542.jpg"
    },
    {
      name:"Sabrina",
      imageUrl:"https://thumbs.dreamstime.com/b/cute-artist-cartoon-character-job-concept-cute-artist-cartoon-character-job-concept-166872542.jpg"
    },
    {
      name:"Joker",
      imageUrl:"https://thumbs.dreamstime.com/b/cute-artist-cartoon-character-job-concept-cute-artist-cartoon-character-job-concept-166872542.jpg"
    },
  ];

  

}
