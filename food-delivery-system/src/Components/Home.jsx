import React from 'react'
// import data from '../utils/data.json'
import RestaurantCard from './RestaurantCard';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


 class Home extends React.Component{
    render(){
        const {productsArr, match} = this.props
        console.log(match)
       return(
        <>
           <Link to='/'>
                <div class="row">{productsArr.map(item => <RestaurantCard items={item}/>)}</div>
           </Link>
        </>
       )
    }
}

const mapStateToProps = state => ({productsArr:state.productsArr})

export default connect (mapStateToProps, null)(Home) 