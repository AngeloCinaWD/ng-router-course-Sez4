import { Component, inject, OnInit } from "@angular/core";
import { AuthStore } from "./services/auth.store";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  // iniettando un service e quindi salvarlo in una proprietà è ppossibile utilizzarlo nel template
  constructor(public auth: AuthStore) {}

  private router = inject(Router);

  ngOnInit() {}

  logout() {
    this.auth.logout();
    // this.router.navigate(["login"]);
  }
}
