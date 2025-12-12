import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  score: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ score }) => {
  const stars = [];
  const fullStars = Math.floor(score);
  const hasHalfStar = score % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
  }

  if (hasHalfStar) {
    stars.push(<StarHalf key="half" className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
  }

  const emptyStars = 5 - Math.ceil(score);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
  }

  return <div className="flex gap-1 items-center">{stars}</div>;
};