import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  UrlSerializer,
} from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { CoursesModule } from "./courses/courses.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { authGuard } from "./services/auth.guard";

// un authentication router guard è un service speciale che ci consente di determinare se un utente può o non può accedere a determinate rotte
// implementiamo questo sistema tramite Router
// il service CanActivate router guard viene invocato prima che inizi la transizione verso la rotta alla quale si applica
// CanDeactivate viene triggerato quando si naviga fuori da un component, utile ad esempio se sto lasciando un form senza aver submittato o se c'è un'operazione di download o upload in corso
// canDeactivate non viene triggerata se si passa ad una child route, viene triggerata solo se si abbandona cpmletamente il componente e si naviga verso un nuovo componente
const routes: Routes = [
  {
    path: "",
    redirectTo: "/courses",
    pathMatch: "full",
  },
  {
    path: "courses",
    loadChildren: () =>
      import("./courses/courses.module").then((m) => m.CoursesModule),
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
