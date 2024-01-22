import { star } from "../assets/icons";
const PopularCard = ({ imgURL, name, price }) => {
    return <>
        <div className="flex flex-col gap-3 items-center">
            <img src={imgURL} alt="" className="w-[282px] height-[282px]" />
            <div className="flex gap-2 text-xl font-normal text-gray-500 mt-2">
                <img src={star} alt="" />
                <span>(4.5)</span>
            </div>
            <h3 className="text-2xl font-semibold">{name}</h3>
            <h2 className="text-2xl text-orange-600 font-bold">{price}</h2>
        </div>
    </>
}

export default PopularCard;