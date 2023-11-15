import { CustomCard } from './../../../youtube/models/customCard.model';
import { createAction, props } from '@ngrx/store';
import { CardsInfo } from 'src/app/youtube/models/card.model';
import { SortData } from 'src/app/youtube/models/sort';

const actionSource = '[Cards]';

export const FetchCards = createAction(
  `${actionSource} Fetch Cards`,
  props<{ searchValue: string }>()
);

export const FetchCardsSuccess = createAction(
  `${actionSource} Fetch Cards Success`,
  props<{ cardsInfo: CardsInfo }>()
);

export const FetchCardsFailed = createAction(
  `${actionSource} Fetch Cards Failed`,
  props<{ error: string }>()
);

export const ClearCardsData = createAction(`${actionSource} Clear Cards Data`);

export const SortCards = createAction(
  `${actionSource} Sort Cards`,
  props<{ sortData: SortData }>()
);

export const FilterCards = createAction(
  `${actionSource} Filter Cards`,
  props<{ filter: string }>()
);

export const AddCustomCard = createAction(
  `${actionSource} Add Custom Card`,
  props<{ customCard: CustomCard }>()
);
