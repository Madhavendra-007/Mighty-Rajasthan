import React from 'react';
// import Slider from '../Components/Slider';
import TopMonuments from '../Components/TopMonuments';
import ContactForm from '../Components/contactForm';
import { Link } from 'react-router-dom';
import VideoPlayer from '../Components/videoPlayer';
import '../Styling/cards.css';




export default function Home() {
  return (
    <>
    <VideoPlayer />

    {/* <Slider /> */}
    <div className='AboutJaipur'>
      <div className="mightyRajasthan"></div>
      <p><b>Embark on an exclusive 3-day journey through the heart of India with our customized 'Mighty Rajasthan' tour for $2000. Immerse yourself in the regal charm of Jaipur, the cultural heartbeat of Rajasthan. Our meticulously curated experience ensures every moment is a celebration of diversity, offering an unforgettable glimpse into rich Indian heritage. Join us for a seamlessly designed adventure where luxury meets culture, promising an exceptional experience at every turn.</b>
<br /> <br />
Uncover the history, architecture, and vibrant energy of the Pink City. Roam through bustling markets, delve into traditional cottage industries, relish the rich flavors of Rajasthani street food, and immerse yourself in the spiritual ambiance of Jaipur by visiting iconic temples. Immerse yourself in the grandeur of Amber Fort, explore the astronomical wonders of Jantar Mantar, and meander through the cultural treasures at Albert Hall. Luxuriate in a premium stay, witness the enchanting nightscape of Jaipur, and experience the city's allure under the moonlight.
      <br /> 
      Indulge in a shopping extravaganza featuring gems, jewelry, Miniature Paintings, Carpets, Textiles, Spices, Marble Sculptures, Wooden and Metal Artifacts, and the unique artistry of Block Printed Textiles. Customize your countryside exploration with visits to the Elephant Village, a Leopard Safari, a spiritual hike, and a luxurious retreat.
    <br /><br />
    <h3>Craft Your Adventure: </h3>
    Our tour is designed for flexibility, allowing you to customize your journey. Tailor each day according to your preferences, ensuring a travel experience that is uniquely yours.
<br />
At Momentous Holidays, we invite you to not just visit Rajasthan but to live and breathe its regal essence. Join us on this unforgettable expedition, where every detail is curated to make your journey through Rajasthan truly momentous.


      </p>
    </div>


    <div id="rootAlign">


    <div className="daysContainer bgImgRight bgImg1">
      <div className='align'>

      <div className="dayDesc dayDesc1"></div>
      <div className="dayCard dayCard1"></div>
      </div>
      <Link to="/day1" className="" style={{ textDecoration:'none'}}>
      <button className='ViewMoreButton'>
    
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
          <path d="M528.3 46.5H388.5c-48.1 0-89.9 33.3-100.4 80.3-10.6-47-52.3-80.3-100.4-80.3H48c-26.5 0-48 21.5-48 48v245.8c0 26.5 21.5 48 48 48h89.7c102.2 0 132.7 24.4 147.3 75 .7 2.8 5.2 2.8 6 0 14.7-50.6 45.2-75 147.3-75H528c26.5 0 48-21.5 48-48V94.6c0-26.4-21.3-47.9-47.7-48.1zM242 311.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5V289c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V251zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm259.3 121.7c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5V228c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.8c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V190z"/>
        </svg>
        Read More
 
      </button>
    </Link>
    </div>
    <div className="daysContainer bgImgLeft bgImg2">
      <div className='align'>

      <div className="dayDesc dayDesc2"></div>
      <div className="dayCard dayCard2"></div>
      </div>
      <Link to="/Day2" className="" style={{ textDecoration:'none'}}>
      <button className='ViewMoreButton'>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
          <path d="M528.3 46.5H388.5c-48.1 0-89.9 33.3-100.4 80.3-10.6-47-52.3-80.3-100.4-80.3H48c-26.5 0-48 21.5-48 48v245.8c0 26.5 21.5 48 48 48h89.7c102.2 0 132.7 24.4 147.3 75 .7 2.8 5.2 2.8 6 0 14.7-50.6 45.2-75 147.3-75H528c26.5 0 48-21.5 48-48V94.6c0-26.4-21.3-47.9-47.7-48.1zM242 311.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5V289c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V251zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm259.3 121.7c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5V228c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.8c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V190z"/>
        </svg>
        Read More
      </button>
    </Link>
    </div>
    <div className="daysContainer bgImgRight bgImg3">
      <div className='align'>

      <div className="dayDesc dayDesc3"></div>
      <div className="dayCard dayCard3"></div>
      </div>
      <Link to="/Day3" className="" style={{ textDecoration:'none'}}>



      <button className='ViewMoreButton'>
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
    <path d="M528.3 46.5H388.5c-48.1 0-89.9 33.3-100.4 80.3-10.6-47-52.3-80.3-100.4-80.3H48c-26.5 0-48 21.5-48 48v245.8c0 26.5 21.5 48 48 48h89.7c102.2 0 132.7 24.4 147.3 75 .7 2.8 5.2 2.8 6 0 14.7-50.6 45.2-75 147.3-75H528c26.5 0 48-21.5 48-48V94.6c0-26.4-21.3-47.9-47.7-48.1zM242 311.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5V289c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V251zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm259.3 121.7c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5V228c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.8c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V190z"/>
  </svg>
    Read More
</button>

    </Link>
    </div>

    




</div>
    <TopMonuments/>
<ContactForm/>
    {/* <div className="ActivityContainer">
      <h1 className='sectionHeadings'>Activity</h1>

      <div className="dayContainerWrapper">
          <div className="dayContainer dayContainer1">
            <img src={Day1} alt="" />
          </div>
          <div className="dayContainer dayContainer2">
            <img src={Day2} alt="" />
          </div>
          <div className="dayContainer dayContainer3">
            <img src={Day3} alt="" />
          </div>
      </div>
    </div> */}
</>
  )
}
