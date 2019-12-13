import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "src/app/models/Todo";

@Component({
  selector: "app-to-do-item",
  templateUrl: "./to-do-item.component.html",
  styleUrls: ["./to-do-item.component.css"]
})
export class ToDoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit() {}

  setClasses() {
    let Classes = {
      todo: true,
      "is-complete": this.todo.completed
    };
    return Classes;
  }

  onToggle(todo) {
    console.log("toggle");
  }

  onDelete(todo) {
    console.log("delete");
  }
}
