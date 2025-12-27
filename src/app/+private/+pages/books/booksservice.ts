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
      update(book:bookitem){ //update
const index=this.data.findIndex(b=>b.id==book.id);
if(index!=-1){
  this.data[index].id=book.id;
  this.data[index].title=book.title;
  this.data[index].writer=book.writer;
  this.data[index].publisher=book.publisher;
  this.data[index].price=book.price;
}
      }
 remove(book:bookitem){ //remove
this.data=this.data.filter(m=>m.id!=book.id)
 }
      }
  

