import React,{ Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/beers">AllBeers</Link>
                <Link to="/random-beer">RandomBeer</Link>
            </div>
        )
    }
}
export default Home