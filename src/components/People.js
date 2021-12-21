import React, { Component } from 'react'
import "./People.css"

export class People extends Component {
    constructor() {
        super();
    
        this.state = {
            userInput: "",
            people:[],
            displaySearched:"", 
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
    
    handleSubmit = (event) => {
        event.preventDefault();
        let personFound = this.state.people.find((person)=> {
            return person.name.toLowerCase() === this.state.userInput.toLowerCase()
        });
        if(personFound){
            this.setState({
                displaySearched: personFound,
            })
        } else{
            this.setState({
                displaySearched: <h3>Person Not Found</h3>
            })
        }
    }

    renderPerson = (person) => {
        return (
          <div>
            <div>Name: {person.name}</div>
            <div>Age: {person.age}</div>
            <div>Gender: {person.gender}</div>
          </div>
        );
      };

    render() {
        let searchInfo = this.state.displaySearched?.name && this.renderPerson(this.state.displaySearched)
        return (
            <div className='people'>
                <h1>Search for a Person</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
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
                    {searchInfo || this.state.displaySearched}
                </div>
            </div>
        )
    }
}

export default People