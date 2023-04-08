import './App.css';
import Hero from './components/hero';
import Slider from './components/Slider';
import Navbar from './components/Navbar';

import travel_01 from './assets/travel-01.jpg';
import travel_02 from './assets/travel-02.jpg';
import travel_03 from './assets/travel-03.jpg';

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
      <Slider 
        imageSrc={travel_02} 
        title={"Be an explorer"} 
        subtitle={"Our platform offers many features"}
        flipped={false}
      />
      <Slider 
        imageSrc={travel_03} 
        title={"Be an explorer"} 
        subtitle={"Our platform offers many features"}
        flipped={true}
      />
    </div>
  );
}

export default App;
