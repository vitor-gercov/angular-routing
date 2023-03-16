import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardControllerService {

  userCanNavigate: boolean = false

  constructor() { }
}
