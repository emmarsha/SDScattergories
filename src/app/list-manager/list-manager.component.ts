import { Component, OnInit } from '@angular/core';

// -- Services -- //
import { ListManagerService } from '../services/list-manager.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {

  // Scattergories lists
  lists = null;

  // Currently selected list
  selected = null;
  // Index of the currently selected list
  selectedIdx = 0;

  constructor(
    private listManager: ListManagerService
  ) { 

  }

  ngOnInit() {
    this.lists = this.listManager.getLists();

    // Default to first list on init
    this.selected = this.lists[0];
  }

  selectList(listIndex: number) {
    this.selected = this.lists[listIndex];
    console.log('selected list ' + this.selected.title);
  }

  // Switch to the next list
  prev() {
    this.selectedIdx--;

    if (this.selectedIdx < 0) {
      this.selectedIdx = this.listManager.getListCount() - 1;
    }

    this.selected = this.lists[this.selectedIdx];
  }

  next() {
    this.selectedIdx++;

    if (this.selectedIdx >= this.listManager.getListCount()) {
      this.selectedIdx = 0;
    }

    this.selected = this.lists[this.selectedIdx];
  }


}
