import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem  } from '@angular/cdk/drag-drop';
import { iterateListLike } from '../../node_modules/@angular/core/src/change_detection/change_detection_util';
import { isNgTemplate } from '../../node_modules/@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todo = [
    "Max",
    "Nicole",
    'Aysek'
  ];

  done = [
    "Gregory",
    'Sandor',
    'James'
  ];

  thirdArray = [
    "Sercei",
    "Eddard",
    "Robert"
  ];

  containerArray = [
    [ "Sercei", "Eddard", "Robert" ],
    [ "Adam", "Gerhard", "Scmidth" ],
    [ "Neo", "Lans", "Herbert" ]
  ];

  copyArr1 = ["And", "Or", "<", ">", "==="];
  copyArr2 = [];


  treeArray = [ ];

  ngOnInit() {
    
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  drop2(event: CdkDragDrop<string[]>) {
    if (event.previousContainer.id !== event.container.id) {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  getLinkOfConnectedArrays() {

  }

  addContainer() {
    this.treeArray = [...this.treeArray, {id: `item-${this.treeArray.length}`, items: []}];
    console.log(this.treeArray);
  }

  createDynamicConnectedList(i) {
    const arr = this.containerArray
            .map((el, index) => {
              if (typeof(el) === 'object') {
                return {name: 'item-', id: index};
              }
            })
            .filter(el => (typeof(el) === 'object' && el.id !== i) ? true : false )
            .map(item => item.name + item.id);

    console.log(arr);
    return [...arr, 'main'];
  }

  addArray() {
    this.containerArray = [...this.containerArray, []];
  }

  createListForMain() {
    return this.containerArray
      .map((el, index) => {
        if (typeof(el) === 'object') {
          return {name: 'item-', id: index};
        }
      })
      .filter(el => typeof(el) === 'object')
      .map(item => item.name + item.id);
  }

  checkItemIsObject(item) {
    return typeof(item) === 'object';
  }

  deleteItem(index) {
    this.containerArray = [...this.containerArray.filter((el, i) => i !== index)];
  }
}
