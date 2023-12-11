import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function StarRating(props) {
    const roundOff = Math.round(props.rating * 2) / 2;

    const renderStars = () => {
        const stars = [];

        for(let i=0; i<5; i++){
            const StarIcon = i+0.5 == roundOff ? FaStarHalfAlt : i+1 <= roundOff ? FaStar : FaRegStar;

            stars.push(<StarIcon key={i} />)
        }
        return stars;
    }
  return (
    <div className='flex w-full justify-center mt-3 text-xl'>{renderStars()}</div>
  )
}

export default StarRating;