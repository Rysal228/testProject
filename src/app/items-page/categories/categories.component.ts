import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { ICategory } from 'src/app/interfaces/caterogy';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categoryList$!: Observable<ICategory[]>

  constructor(private categories: CategoriesService){

  }
  @Output() editCategory: EventEmitter<ICategory> = new EventEmitter<ICategory>();
  ngOnInit(): void{
    this.getCategoriesList();
  }
  error: boolean = false
  getCategoriesList(){
    this.categoryList$ = this.categories.getCategoriesList().pipe(
      catchError(() => {
        this.error = true;
        return of([])
    }))
  }
  selectedCategory(data: ICategory){
    this.editCategory.emit(data)
  }
}
