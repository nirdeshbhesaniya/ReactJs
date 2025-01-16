import React from 'react'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import Aos from 'aos'
import 'aos/dist/aos.css'
import TopProducts from './Components/TopProducts/TopProducts'
import Banner from './Components/Banner/Banner'
import Subscribe from './Components/Subscribe/Subscribe'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import Popup from './Components/Popup/Popup'

function App() {
  React.useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-sine',
      delay: 100,
    });

  }, []);

 const [orderPopup, setOrderPopup] = React.useState(false);
 const handleOrderPopup = () => {
  setOrderPopup(!orderPopup);
};

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup}/>
        <Hero handleOrderPopup={handleOrderPopup} />
        <Products />
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner/>
        <Subscribe/>
        <Products />
        <Testimonials/>
        <Footer/>
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  )
}

export default App;
