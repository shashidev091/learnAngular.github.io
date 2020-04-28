import { Component, OnInit } from '@angular/core';

interface ObjModel {
  index: number,
  id: number,
  name: string
}
@Component({
  selector: 'bootstrap-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.css']
})
export class PannelComponent implements OnInit {
  courses = [];

  viewMode = 'sdfkll';

  recentDeleted = [];

  classObjects = [
    { id: 1, name: 'obj1' },
    { id: 2, name: 'obj2' },
    { id: 3, name: 'obj3' },
    { id: 4, name: 'obj4' },
    { id: 5, name: 'obj5' },
    { id: 6, name: 'obj6' }
  ];

  constructor() { }

  onAdd() {
    this.classObjects.push(
      { id: (this.classObjects.length + 1), name: `obj ${this.classObjects.length + 1}` }
    );
  }

  onRemove(name) {
    let index = this.classObjects.indexOf(name);
    let deletedObj = this.classObjects.splice(index, 1);
    this.recentDeleted.push({ index, deletedObj });
  }

  onClear() {
    this.recentDeleted.push(this.classObjects);
    this.classObjects = [];
  }

  // trac(index, obj) {
  //   return obj ? obj.id : undefined;
  // }

  undoIt() {
    if (this.recentDeleted.length > 0) {
      let data = this.recentDeleted.pop();
      if (!data.index) {
        for (let i = 0; i < data.length; i++) {
          this.classObjects.push(data[i]);
        }
      } else {
        let index = data.index
        let obj = data.deletedObj.pop();
        this.classObjects.splice(index, 0, obj);
      }
    }
  }

  ngOnInit(): void {
  }

}
