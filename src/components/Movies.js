import React, { Component } from 'react'
import "./Movies.css"

export class Movies extends Component {
    constructor() {
        super();
    
        this.state = {
             movies:[],
             currentMovieName: null,
             display: false,
        }
    }

    componentDidMount () {
        this.handleFetch();
    }

    handleFetch = () => {
        fetch(`https://ghibliapi.herokuapp.com/films`)
            .then((res)=> res.json())
            .then((data)=> {
                this.setState({
                    movies: data,
                })
            }).catch((err)=> console.log(err));
    };

    handleDropDownChange = (event)=> {
        this.setState({
            currentMovieName: event.target.value,
            display:true,
        })
    }
    
    render() {
        let dropDownOptions = this.state.movies.map((movie, index)=> {
            return <option name={index} key={movie.title}>{movie.title}</option>
        })
        let currentEmployeeObj = this.state.movies.find((movie)=> {
            return movie.title === this.state.currentMovieName
        })
        return (
            <div className='movies'>
                <h1>Select a Movie</h1>

                <select onChange={this.handleDropDownChange}>
                    <option> </option>
                    {dropDownOptions}
                </select>

                <div className='selected-movie'>
                    { this.state.display && 
                        <>
                        <h3>Title: {currentEmployeeObj?.title}</h3>
                        <h3>Release Date: {currentEmployeeObj?.release_date}</h3>
                        <h3>Description: {currentEmployeeObj?.description}</h3>
                        </>
                    }

                </div>
            </div>
        )
    }
}

export default Movies
