import { star } from "../assets/icons";
const CustomerCard = ({imgURL,customerName,rating,feedback})=>{
    return <> 
    <div className="customer flex flex-col items-center gap-4">
        <img src={imgURL} alt="user image" className="rounded-full" width={100} height={100} />
        <p className="text-center text-xl max-w-[550px] lg:max-w-[400px] text-gray-500">{feedback}</p>
        <div className="flex gap-3"> <img src={star} alt="" /> ({rating})</div>
        <h1 className="text-2xl font-bold">{customerName}</h1>
    </div>
    </>
}
export default CustomerCard;