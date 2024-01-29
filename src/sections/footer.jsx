import { footerLinks,socialMedia } from "../constant";
import { footerLogo } from "../assets/images";
import { copyrightSign } from "../assets/icons";

const Footer =()=>{
    return <>
    <div className="footer-container max-w-[1350px] mx-auto w-full flex flex-wrap  gap-16 lg:flex-row lg:gap-32">
        <div className="top flex flex-col gap-8 ">
            <img src={footerLogo} alt="" width={150} height={30} />
            <p className="text-lg text-gray-400 sm:w-[340px]">Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards</p>
            <div className="social-media flex gap-4">
                {socialMedia.map((ele)=>{
                    return <div className="bg-white p-3 rounded-full">
                        <img src={ele.src} alt={ele.alt} key={Math.random()*100} />
                    </div>
                    
                })}
            </div>
        </div>
        <div className="bottom flex flex-wrap justify-between gap-20">
                {footerLinks.map((list)=>{
                    return <div className="flex flex-col gap-3">
                        <h1 className="text-2xl font-semibold">{list.title}</h1>
                        <div className="flex flex-col gap-3">
                            {list.links.map((alist)=>{
                                return <li className="list-none text-lg text-gray-400"><a href={alist.link}>{alist.name}</a></li>
                            })}
                        </div>
                    </div>
                })}
        </div>
    </div>
        <div className="foot flex flex-col max-w-[1350px] mx-auto items-center mt-6 text-gray-300 sm:flex-row sm:justify-between">
                <div className="flex gap-2">
                    <img src={copyrightSign} alt="" />
                    <span>Copyright. All right reserved</span>
                </div>
                <p>Terms & Conditions</p>
        </div>
    </>
}

export default Footer;