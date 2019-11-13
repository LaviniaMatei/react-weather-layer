import React from"react"
import App from "../App";

class Form extends React.Component {

    render(){
        return(
            
        <div  onSubmit = {this.props.getWeather} style={itemStyle}>
       <h4>Weather Finder</h4>
        <form>
            <input type ="text" name ="city" placeholder = "city.."/>
            
            <button>Get weather</button>
        </form>
        </div>
        );
    }
};

const itemStyle = {
    backgroundColor: 'rgba(170, 170, 190, 0.699)',
    position: 'absolute',
    left:'0', 
    right:'0',
    bottom: '64.5%',
    width: '50%',
    borderTop:'1px solid grey',
    zIndex: 1,
    color: 'white',
    
    
}




export default Form;