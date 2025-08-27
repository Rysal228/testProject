import { Component } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data : any[] = []
  constructor( private itemsService: ItemsService){
    this.itemsService.getItems().subscribe( (result) => this.data = result);
  }
  title = 'newProjectTest';
}
