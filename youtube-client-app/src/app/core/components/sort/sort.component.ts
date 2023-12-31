import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CardsActions from 'src/app/redux/cards/actions/cards.action';

enum Position {
  ASC = 'asc',
  DESC = 'desc',
}

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  sortByDateDir = Position.DESC;

  sortByViewDir = Position.DESC;

  filterString = '';

  constructor(private store: Store) {}

  sortByDate() {
    if (this.sortByDateDir === Position.DESC) {
      this.sortByDateDir = Position.ASC;
    } else {
      this.sortByDateDir = Position.DESC;
    }
    this.store.dispatch(
      CardsActions.SortCards({
        sortData: { sortBy: 'date', direction: this.sortByDateDir },
      }),
    );
  }

  sortByView() {
    if (this.sortByViewDir === Position.DESC) {
      this.sortByViewDir = Position.ASC;
    } else {
      this.sortByViewDir = Position.DESC;
    }
    this.store.dispatch(
      CardsActions.SortCards({
        sortData: { sortBy: 'view', direction: this.sortByViewDir },
      }),
    );
  }

  filterByString() {
    this.store.dispatch(
      CardsActions.FilterCards({
        filter: this.filterString.toLowerCase(),
      }),
    );
  }
}
