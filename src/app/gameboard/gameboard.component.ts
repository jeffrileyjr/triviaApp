import { Component, Input, OnInit } from '@angular/core';
import { TrivaAPIService } from '../Services/triva-api.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {


  constructor(private triviaService: TrivaAPIService) { }

  ngOnInit(): void {

    
  }

}
