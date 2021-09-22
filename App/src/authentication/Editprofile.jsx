import React from 'react'
import { Link } from 'react-router-dom'
const Editprofile = () => {
    return (
        <div className="card">
            <title>Edit Your Profile</title>
            <div className="e-c">
            {/* <div className="item">
                    
                    <h3>Leave the fields Blank if you don't want to change them</h3>
                    </div>
                <div className="item">
                    
                <h3>Username</h3>
                </div>
                <div className="item">
                <input type="text" placeholder="Username" />
                </div>
                <div className="item">
                    
                <h3>Password</h3>
                </div>
                <div className="item">
                    <input type="Password" placeholder="Password" />
                </div>
                <div className="item">
                    
                <h3>Confirm Password</h3>
                </div>
                <div className="item">
                    <input type="Password" placeholder="Confirm Password" />
                </div>
                <div className="item">
                    <h3>Email</h3>
                </div>
                <div className="item">
                    <input type="email" placeholder="Email" />
                </div> */}
                <div className="item">
                    <h3>Choose What You Want to Edit</h3>
                </div>
                <div className="item">
                    <div className="profile">
                        <Link to="/changePassword"><button>Password</button></Link>
                        <Link to="/changeUsername"><button>Username</button></Link>
                    </div>
                   
                </div>
                <div className="item">
                   <Link to="/"><h3 className="h1edit">Back to Home Page</h3></Link> 
                   </div>
            </div>
        </div>
    )
}

export default Editprofile
