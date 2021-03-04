import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  username: string;

  constructor() { }

  getUsername(form) {
    this.username = form.value.username;
    return this.username;
  }

}
