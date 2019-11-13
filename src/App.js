import React from 'react';
import './App.css';
import Form from "./components/Form.js"
import Weather from "./components/Weather.js"
import { Player } from 'video-react';
import { AnimateKeyframes }  from 'react-simple-animate';
import { Animate }  from 'react-simple-animate';
import { divStyle} from "./components/styles.js";



const KEY = "c33e10f57cfe4b2fc079b660557fbcad";

class App extends React.Component{
  

  state = {
    temperature :undefined,
    city : undefined,
    description: undefined, 
    error : undefined
  }


  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
    const data = await api_call.json();
    console.log(data);

 this.setState({

temperature : data.main.temp,
city : data.name,
description: data.weather[0].description,
error : ""
 });

 

  }


  render(){

    return (
      <div className="App">
       <Player >
         <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      
    </Player>
    
    <AnimateKeyframes
        play={true}
        iterationCount="infinite"
        direction="alternate"
        duration={30}
        keyframes={[
         'transform: translateX(0px)',
         'transform: translateX(50vw)'
         
       ]}
     >
        <Form classsName ="box" getWeather = {this.getWeather}/> 
        <Weather 
       temperature = {this.state.temperature}
       city = {this.state.city}
       description = {this.state.description}
       error = {this.state.error}
       />
      </AnimateKeyframes>
   
      </div>
    );
  }
  
}


export default App;
