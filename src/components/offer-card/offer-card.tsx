import { Link } from 'react-router-dom';
import { OfferType } from '../../mocks/offers';
import { AppRoute } from '../../constants';

interface CityCardProps {
  offer: OfferType;
  page?: 'cities' | 'favorites';
  onMouseOver?: (id: number | null) => void;
}

function OfferCard({ offer, page = 'cities', onMouseOver }: CityCardProps) {
  const { id, img, price, type, description, rating, isPremium } = offer;

  return (
    <Link to={`${AppRoute.OFFER}/${id}`}>
      <article
        className={`${page}__card place-card`}
        onMouseEnter={() => onMouseOver && onMouseOver(id)}
        onMouseLeave={() => onMouseOver && onMouseOver(null)}
      >
        {!!isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className={`${page}__image-wrapper place-card__image-wrapper"`}>
          <img
            className="place-card__image"
            src={img}
            width={page === 'cities' ? 260 : 150}
            height={page === 'cities' ? 200 : 110}
            alt="Place"
          />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className="place-card__bookmark-button button"
              type="button"
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: rating ? `${rating * 20}%` : 0 }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">{description}</h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </Link>
  );
}

export default OfferCard;
