import { CanDeactivateFn } from "@angular/router";
import { CourseComponent } from "../courses/course/course.component";
import { Observable } from "rxjs";

// la CanDeactivateFn ha 4 argomenti: il componente che si lascia, la rotta attuale, lo stato attuale e quello prossimo
// la guard restituirà un true se lo user vorrà abbandonare il component o false se il contrario
export const confirmExitGuard: CanDeactivateFn<CourseComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
): boolean => {
  return component.confirmExit();
};
