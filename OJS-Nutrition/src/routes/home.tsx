import sliderBanner from "../assets/slider-banner.jpg"
import firstCategory from "../assets/category-1.jpg"
import secondCategory from "../assets/category-2.jpg"
import thirdCategory from "../assets/category-3.jpg"
import fourthCategory from "../assets/category-4.jpg"
import fifthCategory from "../assets/category-5.jpg"
import sixthCategory from "../assets/category-6.png"


export default function HomePage() {
    return (
        <>
            <div className="header">
                <img src={sliderBanner} />

                <div className="grid grid-cols-3 grid-rows-2 place-items-center ">
                    <div className="relative ">

                        <img src={firstCategory} className="w-full h-full object-cover rounded" />
                        <div className="absolute inset-0 flex items-center justify-end pr-4">
                            <div className="text-right bg-opacity-50 p-3 rounded-md">
                                <p className="text-black text-xl font-bold mb-2">Protein</p>
                                <button className="bg-black text-white font-bold text-sm px-3 py-1 rounded hover:bg-blue-700">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative">

                        <img src={secondCategory} className="w-full h-full object-cover rounded" />
                        <div className="absolute inset-0 flex items-center justify-end pr-4">
                            <div className="text-right bg-opacity-50 p-3 rounded-md">
                                <p className="text-black text-xl font-bold mb-2">Protein</p>
                                <button className="bg-black text-white font-bold text-sm px-3 py-1 rounded hover:bg-blue-700">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative">

                        <img src={thirdCategory} className="w-full h-full object-cover rounded" />
                        <div className="absolute inset-0 flex items-center justify-end pr-4">
                            <div className="text-right bg-opacity-50 p-3 rounded-md">
                                <p className="text-black text-xl font-bold mb-2">Protein</p>
                                <button className="bg-black text-white font-bold text-sm px-3 py-1 rounded hover:bg-blue-700">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative ">

                        <img src={fourthCategory} className="w-full h-full object-cover rounded" />
                        <div className="absolute inset-0 flex items-center justify-end pr-4">
                            <div className="text-right bg-opacity-50 p-3 rounded-md">
                                <p className="text-black text-xl font-bold mb-2">Protein</p>
                                <button className="bg-black text-white font-bold text-sm px-3 py-1 rounded hover:bg-blue-700">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative ">

                        <img src={fifthCategory} className="w-full h-full object-cover rounded" />
                        <div className="absolute inset-0 flex items-center justify-end pr-4">
                            <div className="text-right bg-opacity-50 p-3 rounded-md">
                                <p className="text-black text-xl font-bold mb-2">Protein</p>
                                <button className="bg-black text-white font-bold text-sm px-3 py-1 rounded hover:bg-blue-700">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[294px] h-[158px]">

                        <img src={sixthCategory} className="w-full h-full object-cover rounded" />
                        <div className="absolute inset-0 flex items-center justify-end pr-4">
                            <div className="text-right bg-opacity-50 p-3 rounded-md">
                                <p className="text-black text-xl font-bold mb-2">Protein</p>
                                <button className="bg-black text-white font-bold text-sm px-3 py-1 rounded hover:bg-blue-700">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}