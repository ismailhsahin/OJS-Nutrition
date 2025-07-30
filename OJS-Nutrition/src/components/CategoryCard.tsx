import React from 'react'
// Define the interface for the props that CategoryCard will accept
interface CategoryCardProps {
    imageSrc: string;
    categoryName: string;
}
const CategoryCard: React.FC<CategoryCardProps> = ({ imageSrc, categoryName }) => {
    return (
        <>
            {/* Category Item 1 */}
            <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
                <img src={imageSrc} className="w-full h-full object-cover rounded" />
                <div className="absolute inset-0 flex items-center justify-end pr-4">
                    <div className="text-right bg-opacity-50 p-3 rounded-md">
                        <p className="text-black text-xl font-bold mb-2 uppercase">{categoryName}</p>
                        <button className="bg-black text-white font-bold text-sm px-3 py-1 rounded hover:bg-blue-700">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryCard