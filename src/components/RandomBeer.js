import React, { Component } from 'react'
import apiSingleton from '../lib/Api'
import Beer from './Beer'
class RandomBeer extends Component {
    state = {
        beer: {},
    }
    render(){
        return (
        <div>
          {this.state.beer && <Beer beer={this.state.beer}/>}
        </div>
        )
    }
    componentDidMount = () => {
        apiSingleton.getRandomBeer().then(data => {
            this.setState({
                beer: data.data[0]
            })
        })
        
    }
}
export default RandomBeer