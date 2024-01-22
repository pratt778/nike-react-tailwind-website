import Button from "../component/button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images";
const SpecialOff = () => {
    return <>
        <div className="special-container w-full max-w-[1350px] mx-auto flex flex-col gap-7 xl:flex-row-reverse xl:items-center">
            <div className="flex flex-col gap-7 xl:w-[50%]">
                <h1 className="text-4xl font-bold"><span className="text-orange-600">Special</span> Offer</h1>

                <div className="flex flex-col gap-5">
                    <p className="text-xl font-medium text-gray-500">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
                    <p className="text-xl font-medium text-gray-500">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
                </div>
                <div className="flex flex-wrap gap-5">
                    <Button label="Shop now" iconUrl={arrowRight} />
                    <button className='bg-transparent text-gray-400 flex justify-around items-center px-3 py-3 rounded-3xl border-2 border-gray-400 font-medium text-xl w-[180px]'>Learn more</button>
                </div>
            </div>
            <div className="md:max-w-[750px] md:mx-auto">
                <img src={offer} alt="" />
            </div>
        </div>
    </>
}

export default SpecialOff