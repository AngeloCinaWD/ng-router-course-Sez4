import { Component, OnInit } from "@angular/core";
import { AuthStore } from "./services/auth.store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  // iniettando un service e quindi salvarlo in una proprietà è ppossibile utilizzarlo nel template
  constructor(public auth: AuthStore) {}

  ngOnInit() {}

  logout() {
    this.auth.logout();
  }
}
