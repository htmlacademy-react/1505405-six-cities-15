import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { OfferType } from '../../types/types';

type CardType = 'cities' | 'favorites' | 'near-places';

interface CityCardProps {
  offer: OfferType;
  cardType?: CardType;
  onMouseOver?: (id: number | null) => void;
}

const getImgSizeByCardType: (cardType: CardType) => {
  width: number;
  heigth: number;
} = (cardType) => {
  switch (cardType) {
    case 'favorites':
      return { width: 150, heigth: 110 };
    case 'cities':
    case 'near-places':
    default:
      return { width: 260, heigth: 200 };
  }
};

function OfferCard({
  offer,
  cardType = 'cities',
  onMouseOver,
}: CityCardProps): JSX.Element {
  const { id, img, price, type, description, rating, isPremium } = offer;

  return (
    <Link to={`${AppRoute.OFFER}/${id}`}>
      <article
        className={`${cardType}__card place-card`}
        onMouseEnter={() => onMouseOver && onMouseOver(id)}
        onMouseLeave={() => onMouseOver && onMouseOver(null)}
      >
        {!!isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
          <img
            className="place-card__image"
            src={img}
            alt="Place"
            {...getImgSizeByCardType(cardType)}
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
