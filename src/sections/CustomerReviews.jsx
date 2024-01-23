import CustomerCard from "../component/CustomReviews";
import { reviews } from "../constant";
const CustomerRev = ()=>{
    return <>
    <div className="customer-container w-full max-w-[1350px] mx-auto">
        <div className="headings flex flex-col gap-5 items-center">
            <h1 className="text-4xl font-bold text-center">What our <span className="text-orange-500">Customer</span> Say?</h1>
            <p className="text-xl text-center text-gray-500 max-w-[550px]">Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.</p>
        </div>
        <div className="customers flex flex-col lg:mt-16 gap-8 mt-10 lg:flex-row lg:justify-center lg:gap-24">
        {reviews.map((review)=>{
            return <CustomerCard key={Math.random()*100} {...review}/>
        })}
        </div>
    </div>
    </>
}
export default CustomerRev;