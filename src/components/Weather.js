import React from"react"
import App from "../App";



class Weather extends React.Component {

    render(){
        return(
        <div bsStyle="main" id="mainPanel" onSubmit = {this.props.getWeather} style={itemStyle}>
        
        <p> {this.props.city}</p> 
        
        <p>{this.props.temperature}</p> 
        
        <p>{this.props.description}</p>
        
        </div>
        );
    }

   
};

const itemStyle = {
    backgroundColor: 'rgba(170, 170, 190, 0.699)', 
    position: 'absolute',
    left:'0', 
    right:'0',
    bottom: '13%',
    width: '50%',
    height: '52%',
    zIndex: 1,
    top:'35%',
    height:'120px',
   

}




export default Weather;