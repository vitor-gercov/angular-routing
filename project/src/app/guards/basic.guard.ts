import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardControllerService } from '../services/guard-controller.service';

@Injectable({
  providedIn: 'root'
})
export class BasicGuard implements CanActivate {

  constructor(private guardControllerService: GuardControllerService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.guardControllerService.userCanNavigate
  }

}
