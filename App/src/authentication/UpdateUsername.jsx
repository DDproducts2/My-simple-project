import React from 'react'
import { getAuth, updateProfile } from "firebase/auth";
import { Link } from 'react-router-dom';

const UpdateUsername = () => {
    const auth = getAuth();
    
    function change(){
        var username = document.getElementById('username').value
        updateProfile(auth.currentUser, {
            displayName: username
          }).then(() => {
            // Profile updated!
            
      window.location.reload(false);
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          
    }
    return (
        <div className="card">
            <title>Change Username </title>
            <div className="e-c">
                <div className="item">
                    <h1>Change username</h1>
                </div>
                <div className="item">
                    <div className="profile">
                        <input type="text" id="username" maxlength="14" placeholder="New Username" />
                    </div>
                </div>
                <div className="item">
                    <h2 onClick={change}>Update username</h2>
                </div>
                <div className="item">
                    
                    <Link to="/"><h2>Home</h2></Link>
                </div>
            </div>
        </div>
    )
}

export default UpdateUsername
