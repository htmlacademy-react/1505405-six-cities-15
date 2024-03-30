import { Review } from '../../types/types';
import ReviewItem from '../review-item';

interface ReviewListProps {
  reviews: Review[];
}

function ReviewList({ reviews = [] }: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review, index) => (
        <ReviewItem key={review.date + index.toString()} review={review} />
      ))}
    </ul>
  );
}

export default ReviewList;
