import { Injectable } from '@angular/core';
import { Comic } from '../Models/Comic';
import { Issue } from '../Models/Issue';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  private comics :  Comic[] = [
    {
      comicId:1,
      comicName:"Naruto",
      imagePathCard:"https://can-of-worms.co.uk/5645-large_default/the-flash-comic-book-wooden-wall-plaque.jpg",
      author:"Masashi Kishimoto",
      description:"Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village",
      imagePathDetail:"https://qph.fs.quoracdn.net/main-qimg-dbe7a01f55cd5895da8802ae53aa5cf4",
      noOfIssues:5
    },{
      comicId:1,
      comicName:"The Batman",
      imagePathCard:"https://can-of-worms.co.uk/5645-large_default/the-flash-comic-book-wooden-wall-plaque.jpg",
      author:"Masashi Kishimoto",
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
      author:"Masashi Kishimoto",
      description:"Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village",
      imagePathDetail:"https://qph.fs.quoracdn.net/main-qimg-dbe7a01f55cd5895da8802ae53aa5cf4",
      noOfIssues:5
    },{
      comicId:4,
      comicName:"Flash",
      imagePathCard:"https://can-of-worms.co.uk/5645-large_default/the-flash-comic-book-wooden-wall-plaque.jpg",
      author:"Masashi Kishimoto",
      description:"Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village",
      imagePathDetail:"https://qph.fs.quoracdn.net/main-qimg-dbe7a01f55cd5895da8802ae53aa5cf4",
      noOfIssues:1
    },{
      comicId:5,
      comicName:"Avengers",
      imagePathCard:"https://can-of-worms.co.uk/5645-large_default/the-flash-comic-book-wooden-wall-plaque.jpg",
      author:"Masashi Kishimoto",
      description:"Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village",
      imagePathDetail:"https://qph.fs.quoracdn.net/main-qimg-dbe7a01f55cd5895da8802ae53aa5cf4",
      noOfIssues:3
    },{
      comicId:6,
      comicName:"Sabrina",
      imagePathCard:"https://can-of-worms.co.uk/5645-large_default/the-flash-comic-book-wooden-wall-plaque.jpg",
      author:"Masashi Kishimoto",
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
      pages:[]
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
      pages:[]
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

    getComicSet = ()=>{
      return this.comics.slice();
    }

    getComicByName = (name : string) =>{
        const comic = this.comics.find(c => c.comicName === name);
        return comic;
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
}