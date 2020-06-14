import React from 'react'
import data from '../utils/data.json'
import RestaurantCard from './RestaurantCard';

export default class Home extends React.Component{
    render(){
       return(
        <>
            <div class="row">{data.map(item => <RestaurantCard items={item}/>)}</div>
        </>
       )
    }
}