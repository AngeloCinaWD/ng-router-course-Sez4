import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CourseComponent } from "./course/course.component";
import { CourseResolver } from "./services/course.resolver";
import { LessonsListComponent } from "./lessons-list/lessons-list.component";
import { LessonDetailComponent } from "./lesson/lesson-detail.component";
import { lessonsResolver } from "./services/lessons.resolver";
import { lessonDetailResolver } from "./services/lesson-detail.resolver";
import { authGuard } from "../services/auth.guard";
import { authChildGuard } from "../services/auth-child.guard";

// creo una auth.guard.ts in app/services, in questo file implemento il metodo CanActivate ed in base a questo determino se un utente è loggato o no
const routes: Routes = [
  // questa rotta sarà aperta
  {
    path: "",
    component: HomeComponent,
  },
  // questa rotta si potrà accedere solo se si è loggati
  {
    path: ":courseUrl",
    component: CourseComponent,
    // proprietà canActivate, accetta un array che può contenere più guards
    canActivate: [authGuard],
    // per fare in modo che siano protette anche le rotte child devo implementare la guard CanActivateChild
    // questo perchè se facessi il logout senza un redirect ad esempio alla pagina di login e rimarrei all'interno di una rotta child, se non ricarico la pagina, posso continuare a navigare dall'interno, ad esempio tornando indietro, cambioando video, cambiando lesson etc etc
    canActivateChild: [authChildGuard],
    resolve: {
      course: CourseResolver,
    },
    children: [
      {
        path: "",
        component: LessonsListComponent,
        resolve: {
          lessons: lessonsResolver,
        },
      },
      {
        path: "lessons/:lessonSeqNo",
        component: LessonDetailComponent,
        resolve: {
          lesson: lessonDetailResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CourseResolver],
})
export class CoursesRoutingModule {}
