import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'src/app/Models/Comic';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.sass']
})
export class ComicDetailsComponent implements OnInit {
  @Input() comic : Comic ;
  constructor() { }

  ngOnInit(): void {
    console.log(this.comic);
  }

}
