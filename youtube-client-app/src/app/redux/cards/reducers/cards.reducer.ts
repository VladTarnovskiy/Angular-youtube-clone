import { createReducer, on } from '@ngrx/store';
import { CardsInfo } from 'src/app/youtube/models/card.model';
import { SortData } from 'src/app/youtube/models/sort';
import * as CardsActions from '../actions/cards.action';
import { CustomCard } from '../../../youtube/models/customCard.model';
import {
  sortByDateAsc,
  sortByDateDesc,
  sortByViewAsc,
  sortByViewDesc,
} from '../utils/sort';
import { PagesInfo } from '../models/page';

export interface CardsState {
  cardsInfo: CardsInfo | null;
  customCards: CustomCard[];
  isLoading: boolean;
  error: string | null;
  sortData: SortData;
  pagesInfo: PagesInfo;
  page: number;
}

export const initialState: CardsState = {
  cardsInfo: null,
  customCards: [],
  isLoading: true,
  error: null,
  pagesInfo: {
    nextPage: null,
    prevPage: null,
    searchValue: '',
  },
  page: 1,

  sortData: {
    sortBy: '',
    direction: '',
  },
};

export const reducer = createReducer(
  initialState,
  on(CardsActions.FetchCards, (state) => ({
    ...state,
    page: 1,
    isLoading: true,
  })),
  on(CardsActions.FetchCardsSuccess, (state, { cardsInfo }) => ({
    ...state,
    cardsInfo,
    isLoading: false,
  })),
  on(CardsActions.FetchCardsFailed, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(CardsActions.SortCards, (state, { sortData }) => {
    if (state.cardsInfo) {
      const cards = state.cardsInfo?.items;
      const { sortBy, direction } = sortData;
      let sortedData = [];
      if (sortBy === 'view') {
        if (direction === 'asc') {
          sortedData = sortByViewAsc(cards);
        } else {
          sortedData = sortByViewDesc(cards);
        }
      } else if (direction === 'asc') {
        sortedData = sortByDateAsc(cards);
      } else {
        sortedData = sortByDateDesc(cards);
      }
      const cardsInfo: CardsInfo = { ...state.cardsInfo, items: sortedData };
      return {
        ...state,
        cardsInfo,
      };
    }
    return {
      ...state,
    };
  }),
  on(CardsActions.FilterCards, (state, { filter }) => {
    if (state.cardsInfo) {
      const filteredCardsData = state.cardsInfo.items.filter((card) =>
        card.snippet.title.toLowerCase().includes(filter)
      );
      const cardsInfo: CardsInfo = {
        ...state.cardsInfo,
        items: filteredCardsData,
      };
      return {
        ...state,
        cardsInfo,
      };
    }
    return {
      ...state,
    };
  }),

  on(CardsActions.SetPagesInfo, (state, { pagesInfo }) => ({
    ...state,
    pagesInfo,
    isLoading: true,
  })),
  on(CardsActions.ChangeCurrentPage, (state, { page }) => ({
    ...state,
    page,
    isLoading: true,
  })),
  on(CardsActions.InitCustomCards, (state, { storageCustomCards }) => {
    if (storageCustomCards) {
      return {
        ...state,
        customCards: storageCustomCards,
      };
    }
    return {
      ...state,
    };
  }),
  on(CardsActions.AddCustomCard, (state, { customCard }) => {
    const newCustomCards = [...state.customCards, customCard];
    localStorage.setItem('customCards', JSON.stringify(newCustomCards));
    return {
      ...state,
      customCards: newCustomCards,
    };
  }),
  on(CardsActions.RemoveCustomCard, (state, { customCardId }) => {
    if (state.customCards.length) {
      const newCustomCards = state.customCards.filter(
        (customCard) => customCard.id !== customCardId
      );
      localStorage.setItem('customCards', JSON.stringify(newCustomCards));
      return {
        ...state,
        customCards: newCustomCards,
      };
    }
    return {
      ...state,
    };
  })
);
