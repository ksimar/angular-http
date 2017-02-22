import {Injectable} from "@angular/core";
import {Task} from "./task";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/throw'
import {Http,Headers} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class AppService {

  constructor(private http:Http){}
  tasks : Task[]=[];

  addTask(task: Task){
    console.log("service : addTask")
    this.tasks.push(task);
  }

  delete(index: any) {
    this.tasks.splice(index, 1);
  }

  getData():Observable<any> {
    let jsonHeaders= new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.get('http://localhost:9000/get/all',{headers:jsonHeaders}).map((response:any)=> {
      return this.extractData(response)
    });
  }

  extractData(res:any){
    let body= res.json();
    return body;
  }

  //HTTP POST CALL

   postData(task: Task):Observable<any> {

     let jsonHeaders= new Headers({
       'Content-Type': 'application/json'
     })
     let obj={
       date:"ASD",
       title: "asdas",
       priority: "asdasd",
       description: "asdasd"
     }
     return this.http.post('http://localhost:9000/add',obj,{headers:jsonHeaders}).map((response:any)=> {
       return this.extractData(response)
     }).catch((e:any) => {
       alert("error");
       return Observable.throw<any>(new Error("error"));
     });

   }

  removeData(id: string):Observable<any> {
    let jsonHeaders= new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.get('http://localhost:9000/remove/id',{headers:jsonHeaders}).map((response:any)=> {
      return this.extractData(response)
    });
  }

}
