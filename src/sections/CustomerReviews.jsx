import CustomerCard from "../component/CustomReviews";
import { reviews } from "../constant";
const CustomerRev = ()=>{
    return <>
    <div className="customer-container w-full max-w-[1350px] mx-auto">
        <div className="headings">
            <h1>What our <span>Customer</span> Say?</h1>
            <p>Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.</p>
        </div>
        <div className="customers">
        {reviews.map((review)=>{
            return <CustomerCard key={Math.random()*100} {...review}/>
        })}
        </div>
    </div>
    </>
}
export default CustomerRev;