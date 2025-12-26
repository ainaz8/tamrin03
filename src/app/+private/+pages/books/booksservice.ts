import { Injectable } from '@angular/core';
import { bookitem } from './books';

@Injectable({
  providedIn: 'root',
})
export class Booksservice {
 private data:bookitem[]=[
      {id:1,title:'من پیش از تو ',writer:'جوجومویز',publisher:'ناشر بوک' ,price:5000},
      {id:2,title:'من پس  از تو ',writer:'جوجومویز',publisher:'ناشر بوک' ,price:6000},
      {id:3,title:'باز هم من ',writer:'جوجومویز',publisher:'ناشر بوک' ,price:7000},
      {id:4,title:'شبح اپرا ',writer:'جوجومویز',publisher:'ناشر بوک' ,price:8000},
      {id:5,title:'جهان کوچک من ',writer:'جوجومویز',publisher:'ناشر بوک' ,price:9000},
    ];
    add(book:bookitem) { //creat
      this.data.push(book);
  }
      list(){ //read
        return [...this.data];
      }
  
}
