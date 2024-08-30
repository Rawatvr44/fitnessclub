import './App.css';
import Hero from './components/Herosection/Hero';
import Programs from './components/Program/programs';
import Reason from './components/Reasons/Reason';
import Plan from './components/Plans/plan';
import Footers from './components/Footer/Footers';
import Testimonail from './components/Testimonials/Testimonial';
import Footers1 from './components/Footer1/Footers1';


function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Hero/>
      <Programs/>
<Reason/>
<Plan/>
<Testimonail/>
<Footers/>
<Footers1/>

    </div>
  );
}

export default App;
