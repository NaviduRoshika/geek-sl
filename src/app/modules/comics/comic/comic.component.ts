import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'src/app/Models/Comic';
import { Issue } from 'src/app/Models/Issue';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.sass']
})
export class ComicComponent implements OnInit {
 
  comic: Comic;
  issues : Issue[] = [];

  constructor(private route : ActivatedRoute,private comicService : ComicService) { }

  ngOnInit(): void {
    const selectedComic = this.route.snapshot.params['comicName'];
    // console.log(this.route.snapshot.params['comicName']);
    this.comic = this.comicService.getComicByName(selectedComic);
    this.issues = this.comicService.getComicIssuesByName(selectedComic);
  }

}
