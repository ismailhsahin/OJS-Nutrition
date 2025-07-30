import sliderBanner from "../assets/slider-banner.jpg"
import firstCategory from "../assets/category-1.jpg"
import secondCategory from "../assets/category-2.jpg"
import thirdCategory from "../assets/category-3.jpg"
import fourthCategory from "../assets/category-4.jpg"
import fifthCategory from "../assets/category-5.jpg"
import sixthCategory from "../assets/category-6.png"
import bestSellerFirst from "../assets/bestseller-1.jpg"
import CategoryCard from "../components/CategoryCard"
import DisplayStarRating from "../components/DisplayStarRating"


export default function HomePage() {
    return (
        <>
            <div className="header min-h-screen bg-gray-100 font-sans antialiased flex flex-col items-center py-8">
                <div className="w-full  mb-8 rounded-lg overflow-hidden shadow-lg">
                    <img
                        src={sliderBanner}
                        alt="Slider Banner"
                        className="w-full h-auto object-cover rounded-lg" />
                </div>

                {/* Product Categories Section  */}
                <section className="w-full max-w-6xl px-4 py-12 mx-auto">{/* Increased gap for more visual separation between cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                        {/* Category Item 1 */}
                        <CategoryCard
                            imageSrc={firstCategory}
                            categoryName="Protein"
                        />

                        {/* Category Item 2 */}
                        <CategoryCard
                            imageSrc={secondCategory}
                            categoryName="Vitaminler"
                        />

                        {/* Category Item 3 */}
                        <CategoryCard
                            imageSrc={thirdCategory}
                            categoryName="Saglik"
                        />

                        {/* Category Item 4 */}
                        <CategoryCard
                            imageSrc={fourthCategory}
                            categoryName="Spor Gidalari"
                        />

                        {/* Category Item 5 */}
                        <CategoryCard
                            imageSrc={fifthCategory}
                            categoryName="Gida"
                        />

                        {/* Category Item 6 */}
                        <CategoryCard
                            imageSrc={firstCategory}
                            categoryName="Tum urunler"
                        />
                    </div>
                </section>

                {/* Best Seller Section  */}
                <section className="w-full max-w-6xl px-4 py-12 mx-auto">
                    <div className="grid lg:grid-cols-6 gap-2 place-items-center">
                        <div className="place-items-center">
                            <img src={bestSellerFirst} />
                            <h2 className="uppercase">Whey Protein</h2>
                            <p className="uppercase max-w-xl">En cok tercih edilen protein takviyesi</p>
                            <DisplayStarRating rating={4.5} /> {/* Display 4.5 stars */}
                            <p className="pt-3">10950 Comment</p>
                            <h5>$549</h5>
                        </div>
                        <div className="place-items-center">
                            <img src={bestSellerFirst} />
                            <h2 className="uppercase">Whey Protein</h2>
                            <p className="uppercase max-w-xl">En cok tercih edilen protein takviyesi</p>
                            <DisplayStarRating rating={4.5} /> {/* Display 4.5 stars */}
                            <p className="pt-3">10950 Comment</p>
                            <h5>$549</h5>
                        </div>
                        <div className="place-items-center">
                            <img src={bestSellerFirst} />
                            <h2 className="uppercase">Whey Protein</h2>
                            <p className="uppercase max-w-xl">En cok tercih edilen protein takviyesi</p>
                            <DisplayStarRating rating={4.5} /> {/* Display 4.5 stars */}
                            <p className="pt-3">10950 Comment</p>
                            <h5>$549</h5>
                        </div>
                        <div className="place-items-center">
                            <img src={bestSellerFirst} />
                            <h2 className="uppercase">Whey Protein</h2>
                            <p className="uppercase max-w-xl">En cok tercih edilen protein takviyesi</p>
                            <DisplayStarRating rating={4.5} /> {/* Display 4.5 stars */}
                            <p className="pt-3">10950 Comment</p>
                            <h5>$549</h5>
                        </div>
                        <div className="place-items-center">
                            <img src={bestSellerFirst} />
                            <h2 className="uppercase">Whey Protein</h2>
                            <p className="uppercase max-w-xl">En cok tercih edilen protein takviyesi</p>
                            <DisplayStarRating rating={4.5} /> {/* Display 4.5 stars */}
                            <p className="pt-3">10950 Comment</p>
                            <h5>$549</h5>
                        </div>
                        <div className="place-items-center">
                            <img src={bestSellerFirst} />
                            <h2 className="uppercase">Whey Protein</h2>
                            <p className="uppercase max-w-xl">En cok tercih edilen protein takviyesi</p>
                            <DisplayStarRating rating={4.5} /> {/* Display 4.5 stars */}
                            <p className="pt-3">10950 Comment</p>
                            <h5>$549</h5>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
