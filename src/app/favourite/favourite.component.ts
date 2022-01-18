import { Component, OnInit, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
  
})
export class FavouriteComponent{

  @Input('is-liked') isLiked!: boolean;
  @Output() change = new EventEmitter();
  
  toggle(){
    this.isLiked = !this.isLiked;
    this.change.emit(this.isLiked); 
  }


}
