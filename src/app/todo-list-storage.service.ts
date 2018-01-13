import { Injectable } from '@angular/core';

const storageName = 'aah_todo_list';

@Injectable()
export class TodoListStorageService {

  private todoList;

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
  }

  /**
   * get items
   * @returns {any[]}
   */
  get() {
    return [...this.todoList];
  }
  /**
  * Add a new todo item
  * @param item
  * @returns {any[]}
 /**
   * Adiciona um novo item ao todo 
   * @param item
   * @returns {any[]}
   */
  post(item) {
    this.todoList.push(item);
    return this.update();
  }
  /**
   * Sincroniza o armazenamento local com a lista atual
   * @returns {any[]}
   */
  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));

    return this.get();
  } 
  /**
   * encontra o indíce de um item no array
   * @param item
   * @returns {number}
   */
  private findItemIndex(item) {
    return this.todoList.indexOf(item);
  }
  /**
   * Atualiza um item existente
   * @param item
   * @param changes
   * @returns {any[]}
   */
  put(item, changes) {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    return this.update();
  }
  /**
   * Remove um item da lista
   * @param item
   * @returns {any[]}
   */
  destroy(item) {
    this.todoList.splice(this.findItemIndex(item), 1);
    return this.update();
  }
  
}
const defaultList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];