import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/caterogy';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategoriesList(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>('https://api.escuelajs.co/api/v1/categories')
  }
}
