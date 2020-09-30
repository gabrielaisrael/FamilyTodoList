import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public _ts: TodoService, public router:Router ) { }

  public tasks:any=[]
  public members;
  ngOnInit() {
    this._ts.getAllTasks().subscribe(
      res => {
        this.tasks = res;
        console.log(this.tasks)
      },
      err => console.log(err)
    )
  }

  public deleteTask(task){
    this._ts.deleteTask(task).subscribe(
res=>
  {console.log(res);
  this._ts.getAllTasks().subscribe(res=>{
    this.tasks = res
  })
  },
  err=> console.log(err)

    )}
    
  
  displayedColumns=["id","task","name","date","actions"]
}

