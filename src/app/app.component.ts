import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "examplename";

  constructor() {
    console.log("constructors run when the component is rendered.");
    this.name = "joffery";
  }
}
