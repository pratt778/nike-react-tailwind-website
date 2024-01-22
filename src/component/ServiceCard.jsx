
const ServiceCard = ({ imgURL, label, subtext }) => {
    return <>
        <div className="service-card flex-1 sm:w-[350px] sm:min-w-[350px]   h-fit bg-gray-100 px-8 py-12 rounded-2xl shadow-lg">
            <div className="imgage w-11 h-11 flex items-center justify-center bg-orange-600 rounded-full">
                <img src={imgURL} alt="" className="" width={28} height={28} />
            </div>
            <h1 className="font-semibold text-3xl">{label}</h1>
            <p className="text-xl text-gray-500">{subtext}</p>
        </div>

    </>
}

export default ServiceCard;