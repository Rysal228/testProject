import { Component, Input, SimpleChanges } from '@angular/core';
import { Observable, catchError, finalize, of, tap } from 'rxjs';
import { ItemsService } from '../../services/items.service';
import { IProduct } from '../../interfaces/product';
import { ICategory } from 'src/app/interfaces/caterogy';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList$!: Observable<IProduct[]>;
  isLoading: boolean = true;
  constructor( private itemsService: ItemsService){
  }
  @Input() categoryData?: ICategory

  ngOnChanges(changes: SimpleChanges){
    if (changes['categoryData'] && this.categoryData) {
      this.getDataofItems(this.categoryData.id);
    }
  }

  ngOnInit(): void{
    if (!this.categoryData) {
      this.getDataofItems();
    }
  }

  error: boolean = false;
  getDataofItems(categoryId?: number){
    if (!categoryId) {
    this.productList$ = this.itemsService.getProductList().pipe(
      finalize(() => this.isLoading = false),
      catchError(() => {
        this.error = true;
        return of([])
    })
    );
    }
    else {
      this.productList$ = this.itemsService.getProductByCategory(categoryId).pipe(
        finalize(() => this.isLoading = false),
        catchError(() => {
          this.error = true;
          return of([])
      })
      );
    }
  }

}
