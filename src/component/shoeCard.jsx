const Shoecard=({currentImg,changeImg,ImgStore})=>{
    const handleCard=()=>{
        if(currentImg!==ImgStore.bigShoe){
            changeImg(ImgStore.bigShoe)
        }
    }
 return <>
 <div className={`card rounded-3xl border-2 p-4 bg-hero bg-center bg-cover ${currentImg==ImgStore.bigShoe?'border-coral-red':'border-gray-300'}`} onClick={handleCard}>
    <div className="my-card">
        <img 
        src={ImgStore.bigShoe} 
        alt="" 
        width={127}
        height={103.24}
        />
    </div>
 </div>
 </>
}

export default Shoecard;