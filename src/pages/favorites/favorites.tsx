import OfferCard from '../../components/offer-card';
import { OfferType } from '../../types/types';

interface FavoritesProps {
  list: OfferType[];
}

function Favorites({ list }: FavoritesProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {list.map((item) => (
                  <OfferCard key={item.id} offer={item} page="favorites" />
                ))}
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
