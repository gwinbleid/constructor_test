import { Component, ChangeDetectorRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem  } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

  getLinkOfConnectedArrays() {

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
}
