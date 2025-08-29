import { Component } from '@angular/core';
import { ICategory } from '../interfaces/caterogy';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss']
})
export class ItemsPageComponent {
  constructor(){

  }
  category?: ICategory
  getCategory(data: ICategory){
    this.category = data;
  }
}
