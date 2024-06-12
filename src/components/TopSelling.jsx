import { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from "react-icons/fa";
import { popularProducts } from '../data/data';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from './Heading';

const TopSelling = () => {
  const [wishlist, setWishlist] = useState([]);

  const ToggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(product)) {
        return prevWishlist.filter(items => items !== product);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  const ratingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }

    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
    }

    return stars;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
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
    <div className="container mx-auto px-4 py-24">
     <Heading title={"Top selling Products"} />
      <Slider {...settings}>
        {popularProducts.map((product) => (
          <div key={product.id} className="px-2 py-8">  
            <motion.div 
              className="bg-white rounded-lg py-1 px-6 shadow-lg border border-grey-700 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: product.id * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <img src={product.image} alt={product.title} className="w-[20%] sm:w-[30%]" />
                <h3 className="text-sm sm:text-lg font-semibold mb-2">{product.title}</h3>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 mb-2">${product.price}</p>
                <div className="flex items-center">{ratingStars(product.rating)}</div>
                <motion.button 
                  className={`text-xl ${wishlist.includes(product) ? 'text-red-600 ' : 'text-slate-900'}`}
                  onClick={() => ToggleWishlist(product)}
                  whileTap={{ scale: 0.7 }}
                  transition={{ duration: 0.1 }}
                >
                  <FaHeart />
                </motion.button>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopSelling;




