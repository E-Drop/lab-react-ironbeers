import React, { Component } from 'react'
import apiSingleton from '../lib/Api'
import Beer from './Beer'
class DetailBeer extends Component {
    state = {
        beer: {},
    }
    render(){
        return (
        <div>
          {this.state.beer &&  <Beer beer={this.state.beer}/>}
        </div>
        )
    }
    componentDidMount = () => {
        const id= this.props.match.params.id;
        apiSingleton.getBeer(id).then(data => {
            console.log(data.data)
            this.setState({
                beer: data.data
            })
        })
        
    }
}
export default DetailBeer