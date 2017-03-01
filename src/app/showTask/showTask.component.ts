import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {Task} from "../task";

@Component({
  moduleId: module.id,
  selector: 'showTask',
  templateUrl: 'showTask.component.html',
  styleUrls: ['']
})

export class ShowTaskComponent implements OnInit{

  data: Task[];
  constructor(private router: Router, private service: AppService) {}

  ngOnInit() {
    this.data = this.service.tasks
    // this.service.postData(new Task("","","",0)).subscribe((data:any)=>{
    //   this.data=data;
    // },(err:any)=>{
    //   alert(err)
    // });

    this.service.getData().subscribe((data1: any)=> {
      this.data = data1
    },
      (e:any)=> {
      alert(e)
      }
    )
  }

  delete(id: string) {
    this.service.removeData(id).subscribe((data: any)=> {
      this.service.getData().subscribe((data: any) => {
          this.data = data
        },
        (err: any) => {
          alert(err)
        });
    });
  }

  goToEdit(id: string) {
    this.router.navigate(['details', id])
  }
   /* this.service.editData(task).subscribe((data1: any)=> {
        this.data = data1
      },
      (e:any)=> {
        alert(e)
      },
      () => alert("completed")
    ) */


}
