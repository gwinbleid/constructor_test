import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-contructor-item',
  templateUrl: './contructor-item.component.html',
  styleUrls: ['./contructor-item.component.css']
})
export class ContructorItemComponent implements OnInit {
  @Input() data: Array<Object>;
  @Output() deleteChild = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addContainer(data) {
    console.log(data.id);
    data['items'] = [...data['items'], {id: `${data.id}-${data.items.length}`, items: []}];
    console.log(data);
  }

  deleteContainer(item) {
    this.data = [...this.data.filter(el => el['id'] !== item['id'])];
  }

  checkIsObject(data) {
    return (typeof(data) === 'object') ? true : false;
  }
}
