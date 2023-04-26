import './App.css';
import Hero from './components/hero';
import Slider from './components/Slider';
import Navbar from './components/Navbar';

import travel_01 from './assets/stock.jpeg';
import travel_02 from './assets/ent.jpeg';
import travel_03 from './assets/phone.jpeg';
import travel_04 from './assets/1.jpeg';
import travel_05 from './assets/2.jpeg';
import travel_06 from './assets/3.jpeg';

const navbarLinks = [
  {url: "#", title: "Home"}, 
  {url: "#", title: "Trips"}, 
  {url: "#", title: "Rewards"}
];

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
      <Hero imageSrc={travel_01}/>
      {/* <Slider 
        imageSrc={travel_02} 
        title={"Be an explorer"} 
        // subtitle={"Our platform offers many features"}
        flipped={false}
      />
      <Slider 
        imageSrc={travel_03} 
        title={"Be an explorer"} 
        // subtitle={"Our platform offers many features"}
        flipped={true} */}
      {/* /> */}
      <Slider 
        imageSrc={travel_04} 
        title={"Invest with Confidence"} 
        // subtitle={"Our platform offers many features"}
        flipped={true}
      />
      <Slider 
        imageSrc={travel_05} 
        title={"Your Stock Companion"} 
        // subtitle={"Our platform offers many features"}
        flipped={false}
      />
      <Slider 
        imageSrc={travel_06} 
        title={"Get market insights"} 
        // subtitle={"Our platform offers many features"}
        flipped={true}
      />
    </div>
  );
}

export default App;
