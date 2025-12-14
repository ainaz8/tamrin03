import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.html',
  styleUrl: './books.scss',
})
export class Books {
data:bookitem[]=[
  {id:1,title:'من پیش از تو ',writer:'جوجومویز',publisher:'ناشر بوک' ,price:5000},
  {id:2,title:'من پس  از تو ',writer:'جوجومویز',publisher:'ناشر بوک' ,price:6000},
  {id:3,title:'باز هم من ',writer:'جوجومویز',publisher:'ناشر بوک' ,price:7000},
  {id:4,title:'شبح اپرا ',writer:'جوجومویز',publisher:'ناشر بوک' ,price:8000},
  {id:5,title:'جهان کوچک من ',writer:'جوجومویز',publisher:'ناشر بوک' ,price:9000},
]

}
export interface bookitem{
  id:number;
  title:string;
  writer:string;
  publisher:string;
  price:number;
}

