import { Injectable } from '@angular/core';
import { Members, membersitem } from './members';
import { bookitem } from '../books/books';

@Injectable({
  providedIn: 'root',
})
export class Memberservice {
 
   private data: membersitem[] = [
      { id: 1, name: 'ضحی', family: 'بابایی', kodmeli: 1548652345, tel: 9190712273 },
      { id: 2, name: 'مریم', family: 'عباسی', kodmeli: 5496322345, tel: 9190712273 },
      { id: 3, name: 'پروانه', family: 'رضایی', kodmeli: 5235525345, tel: 9190712273 },
      { id: 4, name: 'ندا', family: 'بهرخ', kodmeli: 522541255345, tel: 9190712273 },
      { id: 5, name: 'معصومه', family: 'بحری خو', kodmeli: 5541255345, tel: 9190712273 },
    ];
    add(members:membersitem) {
      this.data.push(members);
    }
    list(){
      return[...this.data];
    }
    update(members:membersitem){
const index=this.data.findIndex(b=>b.id==members.id);
if(index!=-1){
  this.data[index].id=members.id;
  this.data[index].name=members.name;
  this.data[index].family=members.family;
  this.data[index].kodmeli=members.kodmeli;
  this.data[index].tel=members.tel;
}
    }
    remove(members:membersitem){
      this.data=this.data.filter(m=>m.id!=members.id);
    }

}
