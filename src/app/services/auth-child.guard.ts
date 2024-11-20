import { inject } from "@angular/core";
import { CanActivateChildFn, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthStore } from "./auth.store";
import { map } from "rxjs/operators";

export const authChildGuard: CanActivateChildFn = (
  childRoute,
  state
): Observable<boolean | UrlTree> => {
  // inietto il l'AuthStore per sapere se l'utente è loggato o no
  const auth = inject(AuthStore);
  // inietto il Router per gestire il routing
  const router = inject(Router);

  // utilizzo il pipe ed il map
  // dico che o mi restituisce come valore un true legato all'observable isLoggedIn (se isLoggedIn è true restituisco il suo valore), altrimenti restituisco un UrlTree ricavato dal metodo del router parseUrl('stringa della rotta che voglio raggiungere')
  // in questo modo non mi sto sottoscrivendo ma sto gestendo l'observable che viene restituito
  return auth.isLoggedIn$.pipe(
    map((isLoggedIn) => (isLoggedIn ? true : router.parseUrl("/login")))
  );
};
