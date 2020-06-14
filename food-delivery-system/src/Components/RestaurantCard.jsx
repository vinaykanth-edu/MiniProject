import React from 'react'
// import data from '../utils/data.json'

export default class RestaurantCard extends React.Component{
    render(){
        let {items} = this.props
       return(
        <>
            <div class="col-4 mb-4 container-fluid">
            <div class="card">
                <img src={items.image} width="50px" height="250px" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">{items.name}</h5>
                <p class="card-text">{items.cuisines}</p>
            </div>
            </div>
            </div>
        </>
       )
    }
}








