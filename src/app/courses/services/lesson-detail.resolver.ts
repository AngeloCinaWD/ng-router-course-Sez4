import { ResolveFn } from "@angular/router";
import { LessonDetail } from "../model/lesson-detail";
import { Observable } from "rxjs";
import { inject } from "@angular/core";
import { CoursesService } from "./courses.service";

export const lessonDetailResolver: ResolveFn<LessonDetail> = (
  route,
  state
): Observable<LessonDetail> => {
  return inject(CoursesService).loadLessonDetail(
    route.parent.paramMap.get("courseUrl"),
    route.paramMap.get("lessonSeqNo")
  );
};
