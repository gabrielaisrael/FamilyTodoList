import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public http:HttpClient) { }


public getAllTasks() {
  return this.http.get("http://localhost:1001/tasks")
}

public getAllMembers() {
  return this.http.get("http://localhost:1001/members")
}

public addTask(body) {
  return this.http.post("http://localhost:1001/task", body, {
      headers: { 'Content-Type': 'application/json' },
      responseType: "text"
})

 

}
public deleteTask(taskId){
  return this.http.delete("http://localhost:1001/tasks/" + taskId)

}
}