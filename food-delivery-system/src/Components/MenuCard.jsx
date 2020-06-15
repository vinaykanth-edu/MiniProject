import React from 'react'


 const MenuCard =  (props) => {
    const {title, src, price} = props
    // console.log(props)
    return (

        
       
        
       
            <div class="card mb-4">
            <img src={src}  width="50px" class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">Rs:{price}</p>
            <button class="btn-primary">Order Online</button>
             </div>
       
        </div>
        
        
        
    )
}

export default MenuCard