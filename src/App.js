
import './App.css';
import  Hero from './components/Hero'
import Info from './components/Info';
import Header from './components/Header';
import Calculate from './components/Calculate';

function App() {
  return (
    <div className = "flex justify-center items-center flex-col" style = {{marginBottom:"500px"}}>
      <Header />
      <Hero />
      <Info />
      <Calculate />
    </div>
    
  );
}

export default App;
