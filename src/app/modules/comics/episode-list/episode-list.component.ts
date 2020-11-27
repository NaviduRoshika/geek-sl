import { Component, Input, OnInit } from '@angular/core';
import { Issue } from 'src/app/Models/Issue';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.sass']
})
export class EpisodeListComponent implements OnInit {
  @Input() issues : Issue[] ;
  constructor() { }

  ngOnInit(): void {
  }

  panelOpenState = false;
  

}
