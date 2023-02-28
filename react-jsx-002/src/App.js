import './App.css';
import logo from "./images/airbnb.jpg"

function App() {
  const Data_2=()=>{
    return(
    <div className="content-2">
      <h1>The Evolution of <br/>Airbnb's Frontend </h1>
      <h4>@spikebrehm</h4>
      <div>
        <img src={logo}/>
      </div>
    </div>
    )
  }
  return (
    <>
    <Data_2/>
    </>
   
  );
}

export default App;
