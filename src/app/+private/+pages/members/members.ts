import { Component, inject, OnInit } from '@angular/core';
import { bookitem } from '../books/books';
import { Memberservice } from './membersService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-members',
  imports: [FormsModule],
  templateUrl: './members.html',
  styleUrl: './members.scss',
})
export class Members implements OnInit {
  membersService = inject(Memberservice);
  data: membersitem[] = [];
  action: string = 'list';
  item: membersitem = {
    id: 0,
    name: '',
    family: '',
    kodmeli: 0,
    tel: 0,
  };
  
  ngOnInit(): void {
    this.refreshdata();
  }
  refreshdata() {
    this.data = this.membersService.list();
  }
  add() {
    this.item = {
      id: 0,
      name: '',
      family: '',
      kodmeli: 0,
      tel: 0,
    };
    this.action = 'add';
  }
  edit(members:membersitem) {
    this.item={...members};
    this.action ='edit'
  }
  remove(members:membersitem) {
    this.item={...members};
    this.action='remove';
  }
  save() {
    if(this.action == 'add'){
      this.membersService.add(this.item);
         }
    else if(this.action=='edit'){
      this.membersService.update(this.item);
    }
    else if (this.action== 'remove'){
      this.membersService.remove(this.item);
    }
     this.refreshdata();
      this.action = 'list';
    
  }
  cancel() {
    this.action = 'list';
  }
}


export interface membersitem {
  id?: number;
  name: string;
  family: string;
  kodmeli?: number;
  tel?: number;
}
