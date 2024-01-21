import Navbar from "./component/navbar"
import CustomerRev from "./sections/CustomerReviews"
import Footer from "./sections/footer"
import Hero from "./sections/hero"
import Popularprod from "./sections/Popularprod"
import Services from "./sections/Services"
import SpecialOff from "./sections/SpecialOffer"
import Subscribe from "./sections/Subscribe"
import SuperQuality from "./sections/SuperQuality"

const App=()=> {
  return <>
  <main className='relative'>
  <Navbar/>
  <section className="xl:padding-l wide:padding-r padding-b">
    <Hero/>
  </section>
  <section className="padding">
    <Popularprod/>
  </section>
  <section className="padding">
    <SuperQuality/>
  </section>
  <section className="padding-x py-10">
    <Services/>
  </section>
  <section className="padding">
    <SpecialOff/>
  </section>
  <section className="bg-pale-blue padding">
    <CustomerRev/>
  </section>
  <section className="padding-x sm:py-32 py-16 w-full" >
    <Subscribe/>
  </section>
  <section className="bg-black padding-x padding-t pb-8 text-white">
    <Footer/>
  </section>
  </main>
  </>
}

export default App