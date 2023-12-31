import { Card } from 'src/app/youtube/models/card.model';

export const sortByViewAsc = (cards: Card[]) => {
  const sorted = JSON.parse(JSON.stringify(cards)).sort(
    (a: Card, b: Card) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount),
  );
  return sorted;
};

export const sortByViewDesc = (cards: Card[]) => {
  const sorted = JSON.parse(JSON.stringify(sortByViewAsc(cards).reverse()));
  return sorted;
};

export const sortByDateAsc = (cards: Card[]) => {
  const sorted = JSON.parse(JSON.stringify(cards)).sort(
    (a: Card, b: Card) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt),
  );
  return sorted;
};

export const sortByDateDesc = (cards: Card[]) => {
  const sortedData = sortByDateAsc(cards).reverse();
  const data = JSON.parse(JSON.stringify(sortedData));
  return data;
};
