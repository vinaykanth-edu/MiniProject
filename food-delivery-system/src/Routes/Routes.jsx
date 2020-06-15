import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../Components/Home';
import Menu from '../Components/Menu'

export default function Routes(){
    return (
        <>
            <Route exact path='/' render={(props)=> <Home {...props}/>}/>
            <Route exact path='/:id' render={(props)=><Menu {...props}/>}/>
            {/* <Route exact path='/Menu' render={()=> <Menu {}> } */}
        </>
    )
}
