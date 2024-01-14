import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, find, from, map, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import * as FavCardsActions from 'src/app/redux/favorite/actions/fav-cards.action';
import { selectCard } from 'src/app/redux/cards/selectors/cards.selectors';
import { selectFavoriteCards } from 'src/app/redux/favorite/selectors/fav-cards.selectors';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-details',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit, OnDestroy {
  isFavorite = false;
  card$: Observable<Card | null> = this.store.select(selectCard);
  card!: Card | null;
  cardId!: string;
  favCards$: Observable<Card[] | null> = this.store.select(selectFavoriteCards);
  subscription!: Subscription;
  playerLink!: string | null;

  constructor(private store: Store) {}

  addFavorite(card: Card) {
    this.store.dispatch(FavCardsActions.AddFavCard({ newCard: card }));
  }

  removeFavorite(key: string) {
    this.store.dispatch(FavCardsActions.RemoveFavCard({ key }));
  }

  ngOnInit() {
    this.subscription = this.card$.subscribe((card: Card | null) => {
      if (card !== null) {
        this.cardId = card.id;
      }
    });

    const firstChildSubscription = this.favCards$
      .pipe(
        switchMap((favCards) =>
          from(favCards ?? []).pipe(
            find((favCard) => favCard.id === this.cardId),
            map((value) => !!value)
          )
        )
      )
      .subscribe((isFav: boolean) => {
        if (isFav) {
          this.isFavorite = true;
        } else {
          this.isFavorite = false;
        }
      });

    const secondChildSubscription = this.card$.subscribe(
      (card: Card | null) => {
        if (card) {
          this.card = card;
          this.playerLink = `https:${
            card.player.embedHtml.split('"')[5]
          }?autoplay=1`;
        }
      }
    );

    this.subscription.add(firstChildSubscription);
    this.subscription.add(secondChildSubscription);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
