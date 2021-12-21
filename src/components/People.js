import React, { Component } from 'react'
import "./People.css"

export class People extends Component {
    constructor() {
        super();
    
        this.state = {
            userInput: "",
            people:[],
            searched:"", 
        }
    }

    componentDidMount() {
        this.handleFetch();
    }
    
    handleUserInput = (event) => {
        this.setState({
            userInput: event.target.value 
        })
    }

    handleFetch = () => {
        fetch(`https://ghibliapi.herokuapp.com/people/`)
        .then((res)=> res.json())
        .then((data)=> {
            this.setState({
                people: data,
            })
        }).catch((err)=> console.log(err));
    }
    
    render() {
        return (
            <div className='people'>
                <h1>Search for a Person</h1>
                <div>
                    <form onSubmit={""}>
                        <input
                            type="text"
                            onChange={this.handleUserInput}
                            name="userInput"
                            id="userInput"
                            value={this.state.userInput}
                            placeholder='Find your Person'
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="person-data">
                    Found 
                </div>
            </div>
        )
    }
}

export default People
