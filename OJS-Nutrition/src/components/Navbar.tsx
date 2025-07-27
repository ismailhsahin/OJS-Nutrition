import React from "react";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import logo from "../assets/LOGO_Siyah.png"

const Navbar: React.FC = () => {
    return (
        <header className="bg-white shadow-md w-full py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo - Left */}
                <div className="text-2xl font-bold text-blue-600">
                    <img src={logo} />
                </div>

                {/* Center Content: Search + Account + Cart */}
                <div className="flex items-center gap-6 flex-1 justify-end">
                    {/* Search Bar */}
                    <form className="flex w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full border-2 border-gray-400 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-gray-400 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
                        >
                            Search
                        </button>
                    </form>

                    {/* Account Dropdown */}
                    <div className="relative group">
                        <div className="flex item-center gap-4 py-2 px-2 border-2 border-gray-400">
                            <span><FaUserCircle className="text-2xl text-gray-400 cursor-pointer" /></span>
                            <span className="text-gray-400">ACCOUNT</span>
                            <VscTriangleDown className="text-2xl text-gray-400" />
                        </div>
                        <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border rounded-md shadow-md w-40">
                            <ul className="text-sm text-gray-700">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Login</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Register</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Account</li>
                            </ul>
                        </div>
                    </div>

                    {/* Cart Button */}
                    <button className="relative">
                        <div className="flex item-center py-2 px-2 gap-2 bg-gray-400 border-2 border-gray-400 rounded">
                            <FaShoppingCart className="text-2xl text-white" />
                            <span className="text-white">Cart</span>
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                3
                            </span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="bg-[#2B2B2B] my-5">
                <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
                    <span>PROTEIN</span>
                    <span>SPOR GIDALARI</span>
                    <span>SAGLIK</span>
                    <span>GIDA</span>
                    <span>VITAMIN</span>
                    <span>TUM URUNLER</span>
                </div>
            </div>
            <div>
                <div className="max-w-6xl mx-auto flex items-center justify-between" >
                    <span className="uppercase text-sm"> <span className="font-bold">Ayni gun kargo</span> 16:00'dan Onceki Siparislerde </span>
                    <span className="uppercase text-sm"> <span className="font-bold">Ucretsiz kargo</span> 100 TL uzeri Siparislerde </span>
                    <span className="uppercase text-sm"> <span className="font-bold">Guvenli Alisveris</span> 1.000.000+ mutlu musteri </span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
