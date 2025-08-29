import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getProductList(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://api.escuelajs.co/api/v1/products')
  }

  getProductById(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(`https://api.escuelajs.co/api/v1/products/${id}`)
  }

  getProductByCategory(id?: number): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
  }
}
