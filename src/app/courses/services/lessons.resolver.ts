import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from "@angular/router";
import { LessonSummary } from "../model/lesson-summary";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";
import { inject } from "@angular/core";

export const lessonsResolver: ResolveFn<LessonSummary[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<LessonSummary[]> => {
  return inject(CoursesService).loadAllCourseLessonsSummary(
    route.paramMap.get("courseUrl")
  );
};
