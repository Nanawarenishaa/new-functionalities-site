import Slider from "react-slick";
import { TestimonialData } from "../data/data";
import Heading from "./Heading";

const Testimonial = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto w-full h-screen flex flex-col items-center justify-center gap-12 px-4 py-24">
      <Heading title={"TESTIMONIAL"} />
      <div className="w-full md:w-[80%] lg:w-[60%] px-4 md:px-8 lg:px-12">
        <Slider {...settings}>
          {TestimonialData.map((testimonial, index) => (
            <div className="flex items-center justify-center h-[46vh] md:h-[38vh] lg:h-[35vh]" key={index}>
              <div className="border border-black flex flex-col gap-1 p-4 md:p-8 rounded-sm shadow-lg bg-black text-white h-full w-full">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <img src={testimonial.image_url} className="w-20 h-20 shadow-lg rounded-full object-cover" alt={testimonial.name} />
                  <div className="text-center md:text-left">
                    <h2 className="sm:text-xl text-md font-semibold">{testimonial.name}</h2>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
                <p className="mt-4  text-sm sm:text-lg  text-center md:text-left">{testimonial.testimonial}</p>
                <span className="  text-xl text-yellow-500 text-center md:text-left ">{'★'.repeat(testimonial.rating)}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;

