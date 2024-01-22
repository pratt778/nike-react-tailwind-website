import { products } from "../constant";
import PopularCard from "../component/PopularCard";
const Popularprod =()=>{
    return <>
    <div className="popular-container w-full max-w-[1350px] mx-auto flex flex-col gap-16">
        <div className="popular-info flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Our <span className="text-orange-600">Popular</span> Products</h1>
            <p className="text-lg text-gray-400">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
        </div>
        <div className="product-list flex flex-col gap-10 sm:grid sm:grid-cols-2 sm:gap-7 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product)=>{
                return <PopularCard key={Math.random()*100} {...product}/>
            })}
        </div>
    </div>
    </>
}
export default Popularprod;