import { inject } from "@angular/core";
import { CanLoadFn, Router } from "@angular/router";
import { AuthStore } from "./auth.store";
import { Observable } from "rxjs";
import { first, tap } from "rxjs/operators";

export const canLoadAuthGuard: CanLoadFn = (
  route,
  state
): Observable<boolean> => {
  // forziamo il completamento dell'emissione dell'observable con il first() operator, cioè emetti il primo valore e completati
  // utilizziamo inoltre il tap() operator per implementare una funzionalità parallela col valore emesso, se è false rendirizziamo lo user alla pagina di login
  // dobbiamo iniettare il Router

  const router = inject(Router);

  return inject(AuthStore).isLoggedIn$.pipe(
    first(),
    tap((isLoggedIn) => (isLoggedIn ? isLoggedIn : router.navigate(["login"])))
  );
};
