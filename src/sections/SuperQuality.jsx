import { shoe8 } from "../assets/images";
import Button from "../component/button";
const SuperQuality = () => {
    return <>
        <div className="super-container w-full max-w-[1350px] mx-auto flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="text-superQ flex flex-col  lg:w-[50%] gap-10 lg:pr-4">
                <h1 className="text-4xl font-bold">We Provide You <span className="text-orange-600">Super Quality </span>Shoes</h1>
                <p className="text-xl text-gray-500">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
                <p className="text-xl text-gray-500">Our dedication to detail and excellence ensures your satisfaction</p>
                <Button label={'View Details'}/>
            </div>
            <div className="image w-full flex items-center justify-center lg:max-w-[50%]">
                <img src={shoe8} alt="" />
            </div>
        </div>
    </>
}

export default SuperQuality;