import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Authgoogle } from './authgoogle';
import { Profile } from './landingpage/profile.model';

export const authGuard: CanActivateFn = (route, state) => {
  
  const loginService : Authgoogle = inject(Authgoogle);
  const router: Router = inject(Router);
  
  const loggedProfile: Profile = loginService.getLoogeedProfile();

  if(loggedProfile){
    return true
  }

  router.navigate(['']);
  
  return false;
};
