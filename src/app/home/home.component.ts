import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.router.navigateByUrl('/quiz');
  }



  constructor(private userService: UserInfoService, private router: Router) { }

  ngOnInit(): void {


  }

}
