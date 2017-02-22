import {Component, OnInit} from "@angular/core";
import {Task} from "../task";
import {AppService} from "../app.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  //moduleId: module.id,
  selector: 'createTask',
  templateUrl: './app/createTask/createTask.component.html',
  styleUrls: ['']
})

export class CreateTaskComponent implements OnInit{

  userTasks: Task[];
  userTask: Task=new Task('','','','');

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
    this.userTasks = this.service.tasks;
  }

  submit() {
    console.log("create: Submit called")
   // this.service.addTask(this.userTask);
   // this.router.navigate(['showTask']);
    this.service.postData(this.userTask);
    this.router.navigate(['showTask']);
  }
}
