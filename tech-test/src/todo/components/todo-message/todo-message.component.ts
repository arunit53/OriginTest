import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-message',
  templateUrl: './todo-message.component.html',
  styleUrls: ['./todo-message.component.sass']
})
export class TodoMessageComponent implements OnInit {
  @Input("message") message: string;
  constructor() {
    this.message = '';
   }

  ngOnInit(): void {
  }

}

