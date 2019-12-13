import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToDosComponent } from "./components/to-dos/to-dos.component";
import { ToDoItemComponent } from "./components/to-do-item/to-do-item.component";

@NgModule({
  declarations: [AppComponent, ToDosComponent, ToDoItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
