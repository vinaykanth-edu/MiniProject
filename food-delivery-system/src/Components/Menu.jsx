import React from 'react'

import { connect } from 'react-redux';
import MenuCard from './MenuCard'

 class Menu extends React.Component{
    render(){
        let {match, productsArr} = this.props
        let item = productsArr.find(item => item.id == Number(match.params.id))
        // console.log( item.)
        let data = item.menu
        console.log(data)
        
        return(
            <>
                <div class="col-4 container">
                    
                        <div >
                            {data.map(items => <MenuCard src={items.src} title={items.title} price={items.price}/>)}
                        </div>
                        
                      
                </div>
            </>
        )
    }
} 


const mapStateToProps = state => ({productsArr:state.productsArr})

export default connect (mapStateToProps, null)(Menu) 


// {item.menu.map(items => <div>{items.price}</div>)}


// function Menu(props) {
//     const {match,restaurantArray} = props
//     const item = restaurantArray.find(item =>item.id==match.params.id)
//     return (
//     <Grid container justify="center" spacing={1}>
//     {item.Menu.map(item => <MenuList key={item.id} name={item.item} url={item.img} price={item.price} id={item.id} match={match}/>)}
//     </Grid>
//     )
//     } 