import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post ={
    title: "My First Post",
    isLiked: false
  }
  
  isLikedChanged(isLiked: boolean){
    console.log("Liked state Changed", isLiked)
  }

}
