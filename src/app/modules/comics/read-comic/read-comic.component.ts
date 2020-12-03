import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-read-comic',
  templateUrl: './read-comic.component.html',
  styleUrls: ['./read-comic.component.sass']
})
export class ReadComicComponent implements OnInit {
  @ViewChild("section1", { static: false }) section1;
  pages:string[] ;
  pageIndex = 0;
  issueTitle:string = "xxx";
  constructor(private router : Router,private comicService : ComicService,  private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    const comicName = this.route.snapshot.params["comicName"];
    const comicNo = +this.route.snapshot.params["issueNo"];
    this.issueTitle = this.route.snapshot.queryParams["issueTitle"];
    this.pages = this.comicService.getComicIssuePages(comicName,comicNo);
    console.log(this.route,this.pages);
    
  }

  onForwardClick(){
    this.pageIndex++;
    if (this.pageIndex == this.pages.length) {
       this.pageIndex = 0;
    }
    this.section1.nativeElement.scrollIntoView({ behavior: "smooth" });
  }
  onBackwardClick(){
    this.pageIndex--;
    if (this.pageIndex < 0) {
       this.pageIndex = 0;
    }
    this.section1.nativeElement.scrollIntoView({ behavior: "smooth" });
  }

  backButtonClick(){
      this.router.navigate(["../"],{relativeTo:this.route});
  }

}
