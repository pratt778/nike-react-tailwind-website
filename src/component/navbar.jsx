import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { useState } from "react";
const Navbar = () => {
    const [active, setActive] = useState(false);
    const handleNavbar = () => {
        setActive(!active);
    }
    return <>
        <header className="w-full absolute z-20">
            <div className="header-container max-w-[1350px] w-full mx-auto padding-x xl:px-5 py-4 lg:flex lg:justify-between">
                <div className="small-container w-full flex justify-between h-[4rem] items-center lg:w-fit">
                    <a href="index.html" className="w-[120px]">
                        <img src={headerLogo} alt="Nike logo" />
                    </a>
                    <button className="toggle w-[20px] cursor-pointer lg:hidden" onClick={handleNavbar}>
                        <img src={hamburger} alt="toggle button" />
                    </button>
                </div>
                <nav className={active ? "py-4 bg-gray-200 absolute top-0 left-0 h-screen w-full ease-in-out duration-300 lg:hidden" : "absolute top-[-1000px] left-0 w-full ease-in-out duration-500"}>
                    <ul className="flex flex-col items-center gap-5">
                        <li className=" w-full text-center py-3"><a href="#" className="font-medium text-gray-600">Home</a></li>
                        <li className="w-full text-center py-3"><a href="#" className="font-medium text-gray-600">About Us</a></li>
                        <li className="w-full text-center py-3"><a href="#" className="font-medium text-gray-600">Products</a></li>
                        <li className="w-full text-center py-3"><a href="#" className="font-medium text-gray-600">Contact Us</a></li>
                        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 border-none font-medium rounded-md cursor-pointer">Get Started</button>
                        <div className="text-3xl font-bold cursor-pointer" onClick={()=>setActive(false)}><i className="ri-close-line"></i></div>
                    </ul>
                </nav>
                <nav className='hidden lg:flex'>
                    <ul className="flex flex-row items-center  sm:gap-3 lg:gap-16 lg:text-lg">
                        <li className=""><a href="#" className="font-medium text-gray-600">Home</a></li>
                        <li className=""><a href="#" className="font-medium text-gray-600">About Us</a></li>
                        <li className=""><a href="#" className="font-medium text-gray-600">Products</a></li>
                        <li className=""><a href="#" className="font-medium text-gray-600">Contact Us</a></li>
                        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 border-none font-medium rounded-md cursor-pointer">Get Started</button>
                    </ul>
                </nav>
            </div>
        </header>

    </>
}
export default Navbar;