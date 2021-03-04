import { Component, OnInit } from '@angular/core';
import { TrivaAPIService } from '../Services/triva-api.service';
import { UserInfoService } from '../Services/user-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  capturedUsername = false;
  username: string;
  showStart = false;



  getUsername(form) {
    this.userService.getUsername(form);
    this.capturedUsername = !this.capturedUsername;
    console.log(this.username)
    console.log(this.capturedUsername)
    this.showStart = true;
    return this.capturedUsername;
  }



  constructor(private userService: UserInfoService) { }

  ngOnInit(): void {


  }

}
