import { Injectable } from '@angular/core'
import { Todo } from './todo.class'
import { of, bindCallback, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { map, tap, filter, flatMap, defaultIfEmpty } from 'rxjs/operators';
const mystorage = window.localStorage

@Injectable()
export class TodoService {

    constructor(private http: HttpClient) {
    }

    getList() {
        let data: Todo[] = JSON.parse(localStorage.getItem('tasks'))
        return data
    }

    saveList(list: Todo[]) {
        const data: string = JSON.stringify(list)
        localStorage.setItem('tasks', data);
    }

    getDEvices(): Observable<any> {
        const url = "http://localhost:3000/v1/devices/"
        return of(url).pipe(
            flatMap(url => this.http.get(url)),
            map((data) => {
                console.log(data)
                console.log('------ Device Details --------')
                return data
            })
        )

    }

}
