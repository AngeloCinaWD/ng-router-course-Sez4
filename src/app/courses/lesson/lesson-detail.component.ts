import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LessonDetail } from "../model/lesson-detail";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "lesson",
  templateUrl: "./lesson-detail.component.html",
  styleUrls: ["./lesson-detail.component.css"],
})
export class LessonDetailComponent implements OnInit {
  lesson$: Observable<LessonDetail>;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.lesson$ = this.route.data.pipe(map((val) => val.lesson));
  }

  navigateLesson(lesson: LessonDetail, previous: boolean = false) {
    this.router.navigate(
      ["lessons", previous ? lesson.seqNo - 1 : lesson.seqNo + 1],
      {
        relativeTo: this.route.parent,
      }
    );
  }
}
