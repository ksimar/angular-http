import {Component, OnInit} from "@angular/core";
import {Task} from "../task";
import {AppService} from "../app.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'createTask',
  templateUrl: 'createTask.component.html',
  styleUrls: ['']
})

export class CreateTaskComponent implements OnInit{

  userTasks: Task[];
  userTask: Task=new Task('','','','');
  id: string=null;

 /* constructor(){
    this.userTask = new Task("title", "desc")
    this.userTask.priority = 0
    this.userTask.date = "123"
  }
*/
  constructor(private router: Router, private route: ActivatedRoute,
              private service: AppService) {

  }

  ngOnInit() {
   // this.userTasks = this.service.tasks;
    this.route.params.subscribe((data:any)=>{
      this.id=data.id;
      if(this.id){
        //get all data => userTasks
        this.service.getData().subscribe((allTasks: any)=> {
            this.userTasks = allTasks
            this.userTask = this.userTasks.filter(x=> (x._id==this.id))[0];

          },
          (e:any)=> {
            alert(e)
          }
        )
      }
    })
  }

  submit() {
   // console.log("create: Submit called")
   if(this.id){
      //update
     this.service.editData(this.userTask).subscribe((data1: any)=> {
       },
       (e:any)=> {
         alert(e)
       }
     )
   }else{
     //post
     this.service.postData(this.userTask).subscribe((data: any)=>{},
       (e: any)=> {
       alert(e)
       })
   }
   // this.service.postData(this.userTask);
    this.router.navigate(['showTask']);
  }
}
