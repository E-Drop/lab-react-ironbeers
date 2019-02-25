import React, { Component } from 'react'

class Beer extends Component {
    
    render(){
        const {beer} =  this.props
        console.log(beer)
        return (
        <div>
            <img height="200" src={beer.image_url}/>
            <h1>{beer.name}</h1>
            <p>{beer.first_brewed}</p>
            <p>{beer.tagline}</p>
            <span>{beer.contributed_by}</span>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
        </div>
        )
    }
}
export default Beer