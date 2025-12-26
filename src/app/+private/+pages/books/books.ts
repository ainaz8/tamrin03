import { Component, inject, OnInit } from '@angular/core';
import { Booksservice } from './booksservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  imports: [FormsModule],
  templateUrl: './books.html',
  styleUrl: './books.scss',
})
export class Books implements OnInit {
  booksservice=inject(Booksservice);
  data:bookitem[]=[];
  action:string='list';
  item:bookitem={
    id:0,
    title:'',
    writer:'',
    publisher:'',
    price:0
  }
  ngOnInit(): void {
    this.refreshdata();
  }
  refreshdata(){
    this.data=this.booksservice.list();
  }
  add() {
    this.action='add';
   
  }
  save() {
  this.booksservice.add(this.item);
  this.refreshdata();
  }
cancel() {
this.action='list'
}
}
export interface bookitem{
  id:number;
  title:string;
  writer:string;
  publisher:string;
  price:number;
}

