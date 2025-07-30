import React from 'react';
import { Star } from 'lucide-react';

// Define the interface for the props that DisplayStarRating will accept
interface DisplayStarRatingProps {
    rating: number;
    totalStars?: number;
    size?: number;
    fillColor?: string;
    emptyColor?: string;
}

const DisplayStarRating: React.FC<DisplayStarRatingProps> = ({
    rating,
    totalStars = 5,
    size = 24, // Default size for Lucide icons is 24px (w-6 h-6)
    fillColor = 'text-yellow-400',
    emptyColor = 'text-gray-300',
}) => {
    // Ensure rating is within valid bounds
    const clampedRating = Math.max(0, Math.min(totalStars, rating));

    return (
        <div className="flex items-center">
            {[...Array(totalStars)].map((_, index) => {
                const starNumber = index + 1;
                // Determine if the star should be fully filled, partially filled, or empty
                const isFilled = starNumber <= clampedRating;
                const isHalfFilled = !isFilled && starNumber - 1 < clampedRating && clampedRating < starNumber;

                return (
                    <Star
                        key={index}
                        size={size} // Set the size of the icon
                        className={`
                            ${isFilled ? fillColor : emptyColor}
                            ${isHalfFilled ? 'half-filled-star' : ''}
                            // Apply fill property directly for solid appearance
                            ${isFilled || isHalfFilled ? 'fill-current' : 'fill-none'}
                        `}
                    />
                );
            })}
            {/* Optional: Display the numeric rating next to the stars */}
            <span className="ml-2 text-gray-700 text-sm">{clampedRating.toFixed(1)}/{totalStars}</span>

        </div>
    );
};

export default DisplayStarRating;
