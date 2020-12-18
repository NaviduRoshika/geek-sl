import { Injectable } from '@angular/core';
import { Artist } from '../Models/Artist';
import { Comic } from '../Models/Comic';
import { Issue } from '../Models/Issue';
import { artists } from '../data/artists';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  private comics :  Comic[] = [
    {
      comicId:1,
      comicName:"Naruto",
      imagePathCard:"https://i.pinimg.com/736x/9a/b6/a2/9ab6a2794d0ed343a4c5d489f5d9828d.jpg",
      author:"Masashi Kishimoto",
      description:"Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village",
      imagePathDetail:"https://qph.fs.quoracdn.net/main-qimg-dbe7a01f55cd5895da8802ae53aa5cf4",
      noOfIssues:5
    },{
      comicId:1,
      comicName:"The Batman",
      imagePathCard:"https://static.posters.cz/image/750/plakaty/batman-comic-i4516.jpg",
      author:"Bob Kane",
      description:"Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village",
      imagePathDetail:"https://qph.fs.quoracdn.net/main-qimg-dbe7a01f55cd5895da8802ae53aa5cf4",
      noOfIssues:8
    },
    {
      comicId:2,
      comicName:"Wonder woman",
      imagePathCard:"https://can-of-worms.co.uk/5645-large_default/the-flash-comic-book-wooden-wall-plaque.jpg",
      author:"Masashi Kishimoto",
      description:"Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village",
      imagePathDetail:"https://qph.fs.quoracdn.net/main-qimg-dbe7a01f55cd5895da8802ae53aa5cf4",
      noOfIssues:15
    },{
      comicId:3,
      comicName:"One piece",
      imagePathCard:"https://can-of-worms.co.uk/5645-large_default/the-flash-comic-book-wooden-wall-plaque.jpg",
      author:"Eiichiro Oda",
      description:"Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village",
      imagePathDetail:"https://qph.fs.quoracdn.net/main-qimg-dbe7a01f55cd5895da8802ae53aa5cf4",
      noOfIssues:5
    },{
      comicId:4,
      comicName:"Flash",
      imagePathCard:"https://can-of-worms.co.uk/5645-large_default/the-flash-comic-book-wooden-wall-plaque.jpg",
      author:"Eiichiro Oda",
      description:"Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village",
      imagePathDetail:"https://qph.fs.quoracdn.net/main-qimg-dbe7a01f55cd5895da8802ae53aa5cf4",
      noOfIssues:1
    },{
      comicId:5,
      comicName:"Avengers",
      imagePathCard:"https://can-of-worms.co.uk/5645-large_default/the-flash-comic-book-wooden-wall-plaque.jpg",
      author:"Eiichiro Oda",
      description:"Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village",
      imagePathDetail:"https://qph.fs.quoracdn.net/main-qimg-dbe7a01f55cd5895da8802ae53aa5cf4",
      noOfIssues:3
    },{
      comicId:6,
      comicName:"Sabrina",
      imagePathCard:"https://can-of-worms.co.uk/5645-large_default/the-flash-comic-book-wooden-wall-plaque.jpg",
      author:"Bob Kane",
      description:"Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village",
      imagePathDetail:"https://qph.fs.quoracdn.net/main-qimg-dbe7a01f55cd5895da8802ae53aa5cf4",
      noOfIssues:25
    }
  ];
  
  private issues : Issue[] = [
    {
      comicName:"Naruto",
      comicId:1,
      issueNo:1,
      issueTitle:"Naruto Uzumaki",
      issuDescription:"Even as the Shinobi Alliance’s resolve begins to falter in the face of Obito’s overwhelming power, Naruto refuses to give in. But how can he turn the tables with the odds so stacked against him",
      pages:["https://pbs.twimg.com/media/D6G9yxBW4AApFnH.jpg",
             "https://cdn2.vectorstock.com/i/1000x1000/55/26/comic-book-page-layout-comics-template-vector-20575526.jpg",
             "https://miro.medium.com/max/2730/1*sWeGQ-h6VGZY9vjDs7X2Ww.jpeg",
             "https://scontent.fcmb11-1.fna.fbcdn.net/v/t1.0-9/37940938_1345380065565663_4727231955928612864_o.jpg?_nc_cat=102&ccb=2&_nc_sid=cdbe9c&_nc_ohc=6fLUt21VfFoAX_z4cS2&_nc_ht=scontent.fcmb11-1.fna&oh=ca9ad657ab3291ab2b866f52f86f8cef&oe=5FF3CEEB"]
    },{
      comicName:"The Batman",
      comicId:2,
      issueNo:1,
      issueTitle:"I am Batman",
      issuDescription:"Even as the Shinobi Alliance’s resolve begins to falter in the face of Obito’s overwhelming power, Naruto refuses to give in. But how can he turn the tables with the odds so stacked against him",
      pages:[]
    },{
      comicName:"Wonder woman",
      comicId:3,
      issueNo:1,
      issueTitle:"The God Killer",
      issuDescription:"Even as the Shinobi Alliance’s resolve begins to falter in the face of Obito’s overwhelming power, Naruto refuses to give in. But how can he turn the tables with the odds so stacked against him",
      pages:[]
    },{
      comicName:"One piece",
      comicId:4,
      issueNo:1,
      issueTitle:"Jorney Begins",
      issuDescription:"Even as the Shinobi Alliance’s resolve begins to falter in the face of Obito’s overwhelming power, Naruto refuses to give in. But how can he turn the tables with the odds so stacked against him",
      pages:[]
    },{
      comicName:"Flash",
      comicId:5,
      issueNo:1,
      issueTitle:"Run Barry Run",
      issuDescription:"Even as the Shinobi Alliance’s resolve begins to falter in the face of Obito’s overwhelming power, Naruto refuses to give in. But how can he turn the tables with the odds so stacked against him",
      pages:["https://scontent.fcmb11-1.fna.fbcdn.net/v/t1.0-9/37905911_1345371742233162_5632472871352664064_o.jpg?_nc_cat=104&ccb=2&_nc_sid=cdbe9c&_nc_ohc=Cja0M4ruAeMAX8J_iP2&_nc_ht=scontent.fcmb11-1.fna&oh=00f186c81c691d7f8a6dbfc8f53a0886&oe=5FF630B1",
              "https://scontent.fcmb11-1.fna.fbcdn.net/v/t1.0-9/37940938_1345380065565663_4727231955928612864_o.jpg?_nc_cat=102&ccb=2&_nc_sid=cdbe9c&_nc_ohc=6fLUt21VfFoAX_z4cS2&_nc_ht=scontent.fcmb11-1.fna&oh=ca9ad657ab3291ab2b866f52f86f8cef&oe=5FF3CEEB",
              "https://scontent.fcmb11-1.fna.fbcdn.net/v/t1.0-9/37909079_1345380122232324_2853152680312832000_o.jpg?_nc_cat=104&ccb=2&_nc_sid=cdbe9c&_nc_ohc=ZQ527I4sdN0AX_EKDRt&_nc_ht=scontent.fcmb11-1.fna&oh=5a026ac260a25bf64564324584ecf6e6&oe=5FF722B2",
              "https://scontent.fcmb11-1.fna.fbcdn.net/v/t1.0-9/37974643_1345380165565653_2234753075602522112_o.jpg?_nc_cat=111&ccb=2&_nc_sid=cdbe9c&_nc_ohc=0QiPBBXx2LoAX9_Pw_g&_nc_ht=scontent.fcmb11-1.fna&oh=f24901e4e9817d665e3d854121e570dd&oe=5FF621FA",
              "https://scontent.fcmb11-1.fna.fbcdn.net/v/t1.0-9/37949253_1345380132232323_3746869232114073600_o.jpg?_nc_cat=108&ccb=2&_nc_sid=cdbe9c&_nc_ohc=PGlNbLjBcukAX--tZwd&_nc_ht=scontent.fcmb11-1.fna&oh=ae4a72e3dd74050c6742cabb1136e101&oe=5FF512BE",
              "https://scontent.fcmb11-1.fna.fbcdn.net/v/t1.0-9/37937569_1345380228898980_8723574689848360960_o.jpg?_nc_cat=105&ccb=2&_nc_sid=cdbe9c&_nc_ohc=HCt5nzvt-NAAX8N5SN8&_nc_ht=scontent.fcmb11-1.fna&oh=879c487ec3bc6a81cb42e65a0dead6e3&oe=5FF59BFD",
              "https://scontent.fcmb11-1.fna.fbcdn.net/v/t1.0-9/38140452_1349591525144517_4885607844176461824_o.jpg?_nc_cat=101&ccb=2&_nc_sid=cdbe9c&_nc_ohc=q84-tOCr3ogAX9VjiwX&_nc_ht=scontent.fcmb11-1.fna&oh=f1b08377f02452ddae7baac4a6aee967&oe=5FF5771F"]
    },{
      comicName:"Avengers",
      comicId:6,
      issueNo:1,
      issueTitle:"Naruto Uzumaki",
      issuDescription:"Even as the Shinobi Alliance’s resolve begins to falter in the face of Obito’s overwhelming power, Naruto refuses to give in. But how can he turn the tables with the odds so stacked against him",
      pages:[]
    },{
      comicName:"Sabrina",
      comicId:7,
      issueNo:1,
      issueTitle:"Naruto Uzumaki",
      issuDescription:"Even as the Shinobi Alliance’s resolve begins to falter in the face of Obito’s overwhelming power, Naruto refuses to give in. But how can he turn the tables with the odds so stacked against him",
      pages:[]
    }
   ];

 
  
  constructor() { }

    addComic = (newComic :Comic)=>{
      this.comics.push(newComic);
    }

    getComicSet = ()=>{
      return this.comics.slice();
    }

    getComicByName = (name : string) =>{
        const comic = this.comics.find(c => c.comicName === name);
        return comic;
    }

    getComicImageByAuthorName = (name:string)=>{
      const works = [];
      this.comics.forEach(comic => {
        if(comic.author === name){
          const work = {
            name:"",
            image:""
          };
          work.name = comic.comicName;
          work.image = comic.imagePathCard;
          works.push(work);
        }
      });
      // console.log(images);
      return works;
    }

    getComicIssuesByName = (name : string)=>{
       const comic = this.comics.find(c => c.comicName === name);
       const issue = this.issues.find(c => c.comicName === name);
       const issues = [];
       for (let  i = 0;  i < comic.noOfIssues; +i++) {
         issues.push(issue);
       }
       return issues;
    }

    getComicIssuePages = (comicName:string,issueNo:number) => {
         const issue = this.issues.find(iss => iss.comicName === comicName && iss.issueNo === issueNo);
         return issue.pages;
    }

   
}
