// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Experience from './component/Experience';
import About from './component/About';
import Skill from './component/Skills';
import Hobbies from './component/Hobbies';

function App() {
  return (
  
    <div className='HoleDiv'>
    
      <Header ></Header>
      <Experience></Experience>
      <About></About>
      <Skill></Skill>
      <Hobbies></Hobbies>
    </div>
  );
}

export default App;
