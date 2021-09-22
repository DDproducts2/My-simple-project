import React from 'react'
import './ng.css'
import { useHistory } from 'react-router-dom'
import { useAuthState } from '../secure/firebase'
import { getAuth, signOut, sendEmailVerification } from 'firebase/auth'
const Verify = () => {

    const { user } = useAuthState()
    const auth = getAuth();
    if (user.emailVerified === true) {
        return (
            <Take />
        )
    }
    
    function Sende(){
        sendEmailVerification(auth.currentUser)
                .then(() => {
                    // Email verification sent!
                    alert('Verification Sent')
                    
                    // ...
                });
    }

    function si() {
        signOut(getAuth())
    }
    return (
        <>
            <div className="card">
        <titile>Verify Your Email Address</titile>
                <div className="e-c">
                    {/* <button onClick={() => signOut(getAuth())}>Sign out</button> */}
                    <h3>Hello!</h3>
                    <h3>Your Account {user.email} Is not verified Yet!</h3>
                    <div className="profile">
                        <button onClick={Sende}>Send Verification Link</button>
                    </div>
                    <h3>Tap on that link !</h3>
                    <h3>After That Tap on Reload</h3>
                    <div className="profile">
                    <button onClick={() => {
                        window.location.reload(false);
                    }}>Reload</button>
                    </div>

                    <div className="profile">
                        <div className="itemc"> Not your Email -  <button onClick={si} className="buttonn">Log Out</button></div>
                    </div>
                </div>
            </div>
        </>
    )

}

export const Take = () => {
    useHistory().push('/')
    return (
        <div>

        </div>
    )
}


export default Verify
