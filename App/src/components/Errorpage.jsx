import React from 'react'
import {Link} from 'react-router-dom'
const Errorpage = () => {
    return (
        <div className="card">
            <title>Error</title>
            <div className="e-c">
            <div className="item">
                <h1>NOT FOUND! </h1>
                
                </div>
                <div className="item"><h1>Eror 404</h1></div>
                <div className="profile">

                    <Link to="/"><button>Go to main page</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Errorpage
