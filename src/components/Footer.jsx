import { Link } from "react-router-dom"
import { navItems } from "../data/data"
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className="w-full bg-black place-content-center text-white m-h-96 py-10  ">
  <div className="container w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 mx-auto py-6 "> 
  <div>
    <h3 className="my-6 font-semibold ">ABOUT US</h3>
    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
   <div className="flex flex-col gap-3 mt-4  ">
   <div className="flex gap-3 items-center ">
    <div className="bg-slate-100 rounded-full  "> <FaLocationDot className="text-black  m-2 text-xl font-bold" /> </div>
    <span className="text-slate-200 duration-300 hover:text-pink-600 ">1234 Lorem, ipsum dolor.</span>
    </div>
    <div className="flex gap-3 items-center">
      <div className="bg-slate-100 rounded-full"> <MdAddCall className="text-black m-2 text-xl font-bold " /> </div>
    <span className="text-slate-200 duration-300 hover:text-pink-600"> +0-123-456-789</span>
    </div>
    <div className="flex gap-3 items-center">
   <div className="bg-slate-100 rounded-full"><MdEmail className="text-black m-2 text-xl font-bold" /></div> 
    <span className="text-slate-200 duration-300 hover:text-pink-600">email123@gmail.com</span>
    </div>
   </div>
  </div>

  <div>
   <h3 className="my-6 font-semibold">CATAGORIES</h3>
   <div className="flex flex-col gap-3  "> 
   <span className="text-slate-200 duration-300 hover:text-pink-600 ">Hot deals</span>
   <span className="text-slate-200 duration-300 hover:text-pink-600">Laptop</span>
   <span className="text-slate-200 duration-300 hover:text-pink-600">Camera </span>
   <span className="text-slate-200 duration-300 hover:text-pink-600 ">Smartphones </span>
   <span className="text-slate-200 duration-300 hover:text-pink-600">Accessories</span>

   </div>
  </div>
  <div>
    <h3 className="my-6 font-semibold">INFORMATON</h3>
    <nav className="flex flex-col gap-3 ">
      {navItems.map(({label , href} , index) => (
        <Link key={index} to={href} className="duration-300 hover:text-pink-600">{label}</Link>
      ))}
    </nav>
  </div>

<div>
  <h3 className="my-6 font-semibold">SERVICES</h3>
  <div className="flex flex-col gap-3 "> 
  <span className="text-slate-200 ">My Account</span>
  <span className="text-slate-200 ">View Cart</span>
  <span className="text-slate-200 ">Privacy & policy</span>
  <span className="text-slate-200 ">Terms & Conditions</span>
  <span className="text-slate-200 ">Help</span>
  </div>
</div>
  </div>
    </div>
  )
}

export default Footer