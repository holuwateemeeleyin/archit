import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = ()=> {
    return (
        <div>
            Opps! Page not found 
            <p> Click <Link to='/'>Here</Link> to go back </p>
        </div>
    )
}

export default NotFound