import './App.css';
import HeroSection from './components/Hero';
import Navigation from './components/Navigation';

const App = () => {
 return(<div>
   <Navigation/>
   <HeroSection/>
 </div>
 );
};

export default App;

// This particular file should get imported to the main.jsx file for getting the required output 
// We will make use of the default export statement

