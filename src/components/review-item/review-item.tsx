import { TReview } from '../../types/types';

interface IReview {
  review: TReview;
}

function ReviewItem({ review }: IReview): JSX.Element {
  const { user, rating, text, date } = review;
  const { name, avatar } = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatar}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={date}>
          {new Date(date).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
