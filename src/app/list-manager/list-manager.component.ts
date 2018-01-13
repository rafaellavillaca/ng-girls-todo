import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
selector: 'todo-list-manager',
template: `
<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
<h1 class="title">
{{ title }}!
</h1>
<img width="300" alt="Angular Logo" src="https://media.giphy.com/media/3oKIPv2ZPduGEHtrOM/giphy.gif">
</div>
<todo-input (submit)="addItem($event)"></todo-input>
<ul>
<li *ngFor="let item of todoList">
<todo-item [todoItem]="item"
(remove)="removeItem($event)"></todo-item>
</li>
</ul>
`,
styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

constructor(private todoListService:TodoListService) { }

ngOnInit() {
this.todoList = this.todoListService.getTodoList();
}
title = 'Wonder Code';
todoList=[];

addItem(title:string) {
this.todoList = this.todoListService.addItem({ item:title });
}
removeItem(item) {
this.todoList = this.todoListService.removeItem(item);
}

}