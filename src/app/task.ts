export class Task {
  title: string;
  description: string;
  priority: string;
  date: string;
  _id: string

 /* constructor(title : string, date : string);

  constructor(title : string, date : string, priority: number=0, desc? : string ) {
    this.title = title;
    this.date = date;
    this.description = desc;
    this.priority = priority;
  }
*/

 constructor(title? : string, date? : string, desc? : string, priority? : string, _id?: string) {
   if(title && date && desc && priority) {
     this.title = title;
     this.date = date;
     this.description = desc;
     this.priority = priority;
   }else if(title && date && desc && priority && _id) {
     this.title = title;
     this.date = date;
     this.description = desc;
     this.priority = priority;
     this._id = _id;
   }
   else {
     this.title = '';
     this.date = '';
     this.description = '';
     this.priority = '';
     this._id = '';
   }
 }

}

