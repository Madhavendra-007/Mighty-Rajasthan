import React from 'react';
import '../Styling/cards.css';
// import Slider from '../Components/Slider';
import TopMonuments from '../Components/TopMonuments';
import ContactForm from '../Components/contactForm';
import { Link } from 'react-router-dom';
import VideoPlayer from '../Components/videoPlayer';




export default function Home() {
  return (
    <>
    <VideoPlayer />

    {/* <Slider /> */}
    <div className='AboutJaipur'>
      <h1>Know about Jaipur</h1>
      <p>Jaipur, known as the "Pink City," is a captivating blend of rich history, vibrant culture, and architectural marvels nestled in the heart of Rajasthan, India. Its iconic pink-hued buildings, adorned with intricate designs, evoke a sense of timeless elegance. The city's imposing forts, notably Amber Fort and Nahargarh Fort, stand as silent witnesses to its royal past, offering panoramic views of the landscape. Jaipur's bustling bazaars, like Johari Bazaar and Bapu Bazaar, beckon with a kaleidoscope of textiles, jewelry, and crafts. The City Palace exudes opulence with its fusion of Rajput, Mughal, and European architectural styles. Jaipur's festivals, like Diwali and Teej, burst with color, music, and traditions, truly embodying the essence of Rajasthan. <br /> <br />
      Nestled in the arid landscapes of Rajasthan, Jaipur, the "Pink City," is a symphony of history and modernity. Its rose-tinted facades pay homage to a bygone era, where every corner whispers tales of valiant Rajput rulers and opulent palaces. Amber Fort's grandeur and Hawa Mahal's delicate architecture stand as testaments to the city's regal heritage. Amidst the chaotic charm of markets like Chandpole Bazaar, artisans craft intricate jewelry and textiles. The City Palace flaunts an exquisite fusion of artistry. Jaipur's soul awakens during festivals, from the electrifying energy of the Gangaur Festival to the celestial beauty of the Diwali lights, all under the desert sky.</p>
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
