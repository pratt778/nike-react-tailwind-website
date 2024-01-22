import { services } from "../constant";
import ServiceCard from "../component/ServiceCard";
const Services =()=>{
    return <>
    <div className="service-container max-w-[1350px] mx-auto flex flex-wrap justify-center gap-8">
        {services.map((services)=>{
            return <ServiceCard key={Math.random()*100 } {...services} />
        })}
    </div>
    
    </>
}

export default Services