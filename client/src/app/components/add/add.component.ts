import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TodoService } from "src/app/services/todo.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent implements OnInit {
  constructor(public _fb: FormBuilder, public _todoService: TodoService) {}

  public members;
  public formAdd: FormGroup;

  ngOnInit() {
    this.formAdd = this._fb.group({
      descriptionTask: "",
      m_id: 0,
    });

    this._todoService.getAllMembers().subscribe(
      (res) => {
        this.members = res;
      },
      (err) => console.log(err)
    );
  }

  public sub() {
    this._todoService.addTask(this.formAdd.value).subscribe(
      (res) => {
        console.log("created");
      },
      (err) => console.log(err)
    );
  }
}
