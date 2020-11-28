import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from 'src/app/Models/Issue';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.sass']
})
export class EpisodeListComponent implements OnInit {
  @Input() issues : Issue[] ;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onComicReadClick(issue:Issue){
    this.router.navigate([issue.issueNo],{relativeTo:this.route});
    console.log("issue", issue,ActivatedRoute);
  }
  

}
