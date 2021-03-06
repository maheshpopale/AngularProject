import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ICategory } from './ICategory.model';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(public http:HttpClient) {
  }
  //baseUrl = 'http://localhost:3000/categories';
  url="https://localhost:44351/api/categories";
  getCategories():Observable<ICategory[]>
  {
    return this.http.get<ICategory[]>(this.url);
  }

  getCategory(id:number):Observable<any>
 {  
     console.log(id);
    return this.http.get('https://localhost:44351/api/categories/'+id);
 }
//add category
  addCategory(categoryName:string,categoryDescription:string):Observable<any>{

    console.log(categoryName);
    console.log(categoryDescription);
    const headers = { 'content-type': 'application/json'};
    const category={Name:categoryName,Description:categoryDescription}
    //console.log(category);
    return this.http.post(this.url,category, {responseType: 'text'});
  }

  //update category
  updateCategory(id:number,name:string,description:string){
    const categorydata={"id":id,"Name":name,"Description":description};
    return this.http.put(this.url,categorydata);
  }

  //delete category
   deleteCategory(id:number)
   {
     let Id=id;
     return this.http.delete('https://localhost:44351/api/categories/'+Id);
     
   }
}
