import { shoes, statistics } from '../constant/index'
import { arrowRight } from '../assets/icons'
import Button from '../component/button'
import { bigShoe1 } from '../assets/images'
import Shoecard from '../component/shoeCard'
import { useState } from 'react'
const Hero = () => {
    const [bigshoeImg, setBigshoeimg]= useState(bigShoe1)
    return <>
        <div className="hero w-full">
            <div className="hero-container pt-20 flex flex-col xl:gap-2.5rem xl:flex-row max-w-[1350px] mx-auto ">
                <div className="top-hero flex flex-col gap-3 xl:mt-36 padding-x xl:p-0 py-3">
                    <span className='text-xl text-orange-500 sm:text-2xl'>Our Summer Collections</span>
                    <h1 className='text-[70px] sm:text-[90px] font-bold xl:whitespace-nowrap z-10 relative '>
                        The New Arrival
                        <br />
                        <span className='text-orange-600'>Nike </span>Shoes
                    </h1>
                    <span className='text-xl font-medium text-gray-500 py-4 max-w-[500px]'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</span>
                    <Button label='Shop now' iconUrl={arrowRight} />
                    <div className="hero-info flex flex-wrap gap-10 pt-10">
                        {statistics.map((stat) => {
                            return <div className='flex flex-col pl-3' key={Math.random() * 100}>
                                <h1 className='text-4xl font-bold'>{stat.value}</h1>
                                <span className='pl-2 text-lg'>{stat.label}</span>
                            </div>
                        })}
                    </div>
                </div>
                <div className="bottom-hero pt-10 mt-10  xl:min-h-screen py-20 xl:py-0 sm:py-40 flex flex-1 relative z-9 justify-center items-center bg-primary bg-hero bg-cover bg-center">
                    <img src={bigshoeImg} alt="" width={610} height={502} className='' />
                    <div className="cards flex absolute -bottom-[9%] gap-2 px-2 sm: left-[5%]">
                       {shoes.map((element)=>{
                        return <div key={Math.random()*100}>
                            <Shoecard
                            currentImg={bigshoeImg}
                            changeImg={(e)=>setBigshoeimg(e)}
                            ImgStore={element}
                            />
                        </div>
                       })}
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Hero