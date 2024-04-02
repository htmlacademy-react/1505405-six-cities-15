import { TReview } from '../../types/types';
import ReviewItem from '../review-item';

interface IReviewList {
  reviews: TReview[];
}

function ReviewList({ reviews = [] }: IReviewList): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>

      <ul className="reviews__list">
        {reviews.map((review, index) => (
          <ReviewItem key={review.date + index.toString()} review={review} />
        ))}
      </ul>
    </>
  );
}

export default ReviewList;
