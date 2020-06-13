import React from 'react'

export default function Footer() {
    return(
        <div className='' >
            <br/>
            <br/>
        <div className='row ' >
            <div className='col-2 offset-2'>
                <p className='mb-3 text-secondary font-weight-bold'>COMPANY</p>
                 <p >About</p>
                 <p>Blog</p>
                 <p>Careers</p>
                 <p>Report Fraud</p>
                 <p>Contact</p>
            </div>
            <div className='col-2 '>
                <p className='mb-3 text-secondary font-weight-bold'>For Foodies</p>
                 <p>Code of Conduct</p>
                 <p>Community</p>
                 <p>Blogger Help</p>
                 <p>Developers</p>
                 <p>Mobile Apps</p>

            </div>
            <div className='col-2'>
                <p className='mb-3 text-secondary font-weight-bold'>For Restaurants</p>
                 <p>Add Restaurant</p>
                 <p>Claim your listing</p>
                 <p>Business App</p>
                 <p>Restaurant Widgets</p>
                 <p>Products for Businesses</p>
            </div>
            <div className='col-2'>
                <p className='mb-3 text-secondary font-weight-bold'>For You</p>
                 <p>Privacy </p>
                 <p>Terms</p>
                 <p>Security</p>
                 <p>Sitemap</p>
            </div>
        </div>
        <hr className='container' style={{border:'1px solid grey'}} />
        <div className="text-center">
                    © Grab Food. All Rights Reserved.
        </div>
    </div>
    )
}