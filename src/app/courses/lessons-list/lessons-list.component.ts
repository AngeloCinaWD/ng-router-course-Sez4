import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LessonSummary } from "../model/lesson-summary";

@Component({
  selector: "lessons-list",
  templateUrl: "./lessons-list.component.html",
  styleUrls: ["./lessons-list.component.css"],
})
export class LessonsListComponent implements OnInit {
  lessons: LessonSummary[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // la lista di lessons la prendo tramite resolver che definisco nel file courses-routing.module.ts
    this.lessons = this.route.snapshot.data["lessons"];
  }
}
