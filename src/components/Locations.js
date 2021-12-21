import React, { Component } from 'react'
import "./Locations.css"


export class Locations extends Component {
    constructor() {
        super();
    
        this.state = {
             locations:[],
             display:false,
             buttonText:"Show Locations"
        }
    }

    componentDidMount () {
        this.handleFetch();
    }

    handleFetch = () => {
        fetch(`https://ghibliapi.herokuapp.com/locations/`)
            .then((res) => res.json())
            .then((data) => this.setState({locations: data}))
            .catch((err)=> console.log(err))   
    }

    handleButtonClick = () => {
        if(this.state.display){
            this.setState({
                display:false,
                buttonText: "Show Locations"
            })
        } else{
            this.setState({
                display:true,
                buttonText: "Hide Locations"
            })
        }
    }

    render() {
        let locationElArr = this.state.display && this.state.locations.map((location)=> {
            return(
                <li id={location.id + location.name}>
                    <h3>Name: {location.name}</h3>
                    <h3>Climate: {location.climate}</h3>
                    <h3>Terrain: {location.terrain}</h3>
                </li>
            )
        }) 
        return (
            <div className="locations">
                <h1>List of Locations</h1>
                <button onClick={this.handleButtonClick} type="submit">{this.state.buttonText}</button>
                <ul className='display-locations'>
                    {locationElArr}
                </ul>
            </div>
        )
    }
}

export default Locations
