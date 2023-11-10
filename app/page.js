import { About } from "@/Components/About/About";
import { Banner } from "@/Components/Banner/Banner";
import { Forme } from "@/Components/Forme/Forme";
import { Project } from "@/Components/Project/Project";
import { Services } from "@/Components/Services/Services";
import { TotalWork } from "@/Components/TotalWork/TotalWork";
import Products from "@/Components/client/Products";
// import 'swiper/swiper-bundle.css'; 


export default function Home() {
  return (
  <>
  <div className="max-w-screen-xl mx-auto ">
      <Banner/>
      <Services />
      <Project/>
      <TotalWork/>
      <About />
      <Products />
      <Forme/>
  
   </div>
  </>
  )
}
