import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <p class="todo-title" [ngClass]="{'todo-complete': isComplete}">
    {{ todoItem.item }}
    </p>
    <button (click)="removeItem()">
  remove
</button>
  <input type="checkbox" (click)="completeItem()"/>`
  ,
  styleUrls: ['./item.component.css']
  
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  @Output() remove:EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  removeItem() {
    this.remove.emit(this.todoItem);
  }
  isComplete: boolean = false;

completeItem() {
  this.isComplete = !this.isComplete;
}

}