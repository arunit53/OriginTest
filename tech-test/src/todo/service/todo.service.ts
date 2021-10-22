import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { map } from "rxjs/operators";

@Injectable()
export class TodoService {
  private tasks = new BehaviorSubject<any>([]);
  task = this.tasks.asObservable();

  constructor(private httpClient: HttpClient) {}
  updateTask(task:any) {
    this.tasks.next(task);
  }

  public getTaskList() {
    const api_url = 'http://localhost:3000/tasks';
    return this.httpClient.get(api_url).pipe(map(res=> res));
  }

  public addNewItem(inputPayload) {
    const api_url = 'http://localhost:3000/tasks';
    return this.httpClient.post(api_url,inputPayload).pipe(map(res=> res));
  }

  public deleteTodoItem(deleteId) {
    console.log('deleteId' + deleteId);
    const api_url = 'http://localhost:3000/'+deleteId;
    return this.httpClient.delete(api_url).pipe(map(res=> res));
  }

  public updateTodoItem(inputPayload) {
    const api_url = 'http://localhost:3000/'+inputPayload.id;
    return this.httpClient.patch(api_url,inputPayload).pipe(map(res=> res));
  }

}
