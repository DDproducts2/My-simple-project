import React from 'react'
import {Link} from 'react-router-dom'
import { useAuthState } from '../secure/firebase'
const Profilecomponent = () => {
    
  const { user } = useAuthState()
    return (
        <div className="card">
            <title>Profile</title>
            <div className="e-c">
                <div className="item">
                     <h3>{user.displayName}</h3>
                </div>
                <div className="item">
                <h3>{user.email}</h3>
                </div>
                <div className="item">
                   <Link to="/editprofile"><h1 className="h1edit">Edit ✎</h1></Link> 
                   
                </div>
                <div className="item">
                   <Link to="/"><h3 className="h1edit">Back to Home Page</h3></Link> 
                   </div>
            </div>
        </div>
    )
}

export default Profilecomponent
