import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() searchResult = new EventEmitter<boolean>();

  @Output() sortBlock = new EventEmitter<boolean>();

  filterButton = false;

  onSearch(data: boolean) {
    this.searchResult.emit(data);
  }

  turnSortBlock() {
    this.filterButton = !this.filterButton;
    this.sortBlock.emit(this.filterButton);
  }
}
