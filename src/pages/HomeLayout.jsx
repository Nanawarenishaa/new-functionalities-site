
import Category from "../components/Category"
import Popular from "../components/Popular"
import Testimonial from "../components/Testimonial"
import Home from "./Home"
import TopSelling from "../components/TopSelling"



const HomeLayout = () => {
 
  return (
    <>
    <Home />
    <Category />
    <Popular />
    <TopSelling />
    <Testimonial />
    </>
  )
}

export default HomeLayout