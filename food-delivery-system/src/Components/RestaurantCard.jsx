import React from 'react'
// import data from '../utils/data.json'
import {Link} from 'react-router-dom'

 export default class RestaurantCard extends React.Component{
    render(){
       let {items, match} = this.props
       return(
        <>
           
           <div class="col-4 mb-4 container">
            <Link to={`/${items.id}`}>
            <div class="card">
                <img src={items.image}  height="200px" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">{items.name}</h5>
                <p class="card-text">{items.cuisines}</p>
            </div>
          
            </div>
            </Link>
            </div> 
         
            
        </>
       )
    }
}








