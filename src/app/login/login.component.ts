import { Component, OnInit } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";

import { Router } from "@angular/router";
import { AuthStore } from "../services/auth.store";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private auth: AuthStore
  ) {
    this.form = fb.group({
      email: ["test@angular-university.io", [Validators.required]],
      password: ["test", [Validators.required]],
    });
  }

  ngOnInit() {
    this.auth.isLoggedIn$.subscribe((val) => console.log(val));
  }

  login() {
    const val = this.form.value;

    this.auth.login(val.email, val.password).subscribe(
      // indirizzo lo user verso una rotta una volta loggato
      () => {
        this.router.navigate(["courses"]);
      },
      (err) => {
        alert("Login failed!");
      }
    );
  }
}
