import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {list} from './listClass';
@Injectable({
    providedIn: 'root'
})
export class SmartTableService  {
lists :list[];
constructor(private httpModule :HttpClient){}

   getData():Observable<any>{
       return this.httpModule.get('http://localhost:8000/reunion_list/get/');
      
    }

    create(data) {
        return this.httpModule.post('http://localhost:8000/show_list/', data);
      }

    delete(id: number): Observable<any> {
        return this.httpModule.delete('http://localhost:8000/show_list/'+ id);
      }

    update(id: number, value: any): Observable<object> {
        return this.httpModule.put('http://localhost:8000/show_list/'+id, value);
      }

      deleteAll(): Observable<any> {
        return this.httpModule.delete('http://localhost:8000/show_list/');
      }
    
   
}

