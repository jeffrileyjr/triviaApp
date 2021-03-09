import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../Services/score.service';
import { UserInfoService } from '../Services/user-info.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  username:string;
  score:number;

  constructor(private userService: UserInfoService, private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.username=this.userService.username;
    this.score = this.scoreService.score;
  }

}
