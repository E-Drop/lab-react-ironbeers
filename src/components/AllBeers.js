import React, {Component} from 'react'
import apiSingleton from '../lib/Api'
import {Link} from 'react-router-dom'
class AllBeers extends Component {
    state= {
        beers:[]
    }
    getBeers = () => {
        apiSingleton.getAllBeers()
        .then((data) => {
            this.setState({
                beers: data.data
            })
        })
    }
    render(){
        const {beers} = this.state
        return (
            beers && beers.map((beer,key)=> {
                return (
                    <div key={key}>
                    <Link to={`/single/${beer._id}`}>
                        <table>
                            <tr>
                                <td rowspan="3">
                                    <img height="200" src={beer.image_url}/>
                                </td>
                                <td>
                                    <h1>{beer.name}</h1>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>{beer.tagline}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>{beer.contributed_by}</span>
                                </td>
                            </tr>
                        </table>
                        </Link>
                        <br/>
                        <br/>
                        <hr/>
                        <br/>
                        <br/>
                    </div>
                )
            })
        )
    }
    componentDidMount(){
        this.getBeers()
    }
}
export default AllBeers