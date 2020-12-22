import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comic } from 'src/app/Models/Comic';
import { ComicService } from 'src/app/services/comic.service';
// import { isImageUrl } from 'is-image-url';

@Component({
  selector: 'app-add-new-comic',
  templateUrl: './add-new-comic.component.html',
  styleUrls: ['./add-new-comic.component.sass']
})

// const isImageUrl = require('is-image-url');

export class AddNewComicComponent implements OnInit {
  comicDataForm:FormGroup;
  newComic : Comic = {
    comicId:0,
    comicName:"",
    imagePathCard:"",
    author:"",
    description:"",
    imagePathDetail:"",
    noOfIssues:5
  };
  constructor(private comicService:ComicService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.comicDataForm = new FormGroup({
      'name':new FormControl(null,[Validators.required]),
      'author':new FormControl(null,[Validators.required]),
      'description':new FormControl(null,[Validators.required]),
      'imagePathCard':new FormControl(null,[Validators.required,this.InvalidUrl]),
      'imagePathDetails':new FormControl(null,[Validators.required,this.InvalidUrl]),
    });
  }

  onSubmit(){
    console.log(this.comicDataForm);
    this.newComic.comicName = this.comicDataForm.controls.name.value;
    this.newComic.author = this.comicDataForm.controls.author.value;
    this.newComic.description = this.comicDataForm.controls.description.value;
    this.newComic.imagePathCard = this.comicDataForm.controls.imagePathCard.value;
    this.newComic.imagePathDetail = this.comicDataForm.controls.imagePathDetails.value;

    this.comicService.addComic(this.newComic);
  }
  // isImageUrl = require('is-image-url');


  InvalidUrl(control : FormControl):{[s:string]:boolean}{
    // {invalidUrl:true}
    // console.log("i came",this.isImageUrl(control.value));

    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    // if (!pattern.test(control.value)) {
    //   console.log("invalid");
    //   return {invalidUrl:true};
    // }
    return null;
  }

  onCancel(){
   this.router.navigate(['../'],{relativeTo:this.route});
  }


















  // validURL(str) {
  //   var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  //     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  //     '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  //     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  //     '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  //     '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

  //   console.log(str,pattern.test(str));

  //   return !!pattern.test(str);
  // }

}
