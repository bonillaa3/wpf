import { Component, OnInit } from '@angular/core';
import { Workout } from '../models/game';
import { Http } from "@angular/http";
import { Room, Player, Quote } from '../models/game';
import { GameService } from '../models/game.service';
import { Router } from '@angular/router';
import { Image } from '../widgets/picture-chooser/picture-chooser.component'




@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  room = new Room();
  me: Player;

  constructor(private http: Http, public game: GameService, private router: Router) { }

  ngOnInit() {
    if(this.game.me == null){
        this.router.navigate(['/login']);
    }
    this.me = this.game.me;
    setInterval(()=> this.update(), 1000)
}

   update(){
    this.http.get(this.game.apiRoot + "/game/room").subscribe( data =>{
        this.room = data.json();
    });
}

    submit(){
        
        document.getElementById('img').style.visibility = 'visible';
        var workout = document.getElementById("e1");
        document.getElementById('list').appendChild(workout);
    }

    delete(){
        var workout = document.getElementById("list");
        document.getElementById('img').style.visibility = 'hidden';
        document.getElementById('e1').appendChild(workout);

    }

    save(){
        document.getElementById('img2').style.visibility = 'visible';

        var workout = document.getElementById("list").remove();
        
       
    }
    
}








