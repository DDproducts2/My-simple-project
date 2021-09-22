import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "../secure/firebase";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const Home = () => {
  const { user } = useAuthState();

  if (user.emailVerified === false) {
    return <Ve />;
  }
  if (user.displayName != null) {
    return <Component />;
  } else {
    return (
      <>
        <Stn />
      </>
    );
  }
};

const Component = () => {
  const { user } = useAuthState();
  console.log(user?.displayName);
  return (
    <>
      <title>Home</title>
      <div className="card">
        <div className="e-c">
          <div className="item">
            <h3>{user.displayName}</h3>
          </div>
          <div className="profile">
            <button onClick={() => signOut(getAuth())}>Sign out</button>
            <Link to="/profile">
              <button>Profile</button>
            </Link>
          </div>
          <div className="profile">
            <Link to="/play"><button className="wide">Play</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const Stn = () => {
  useHistory().push("/setname");
  return <div></div>;
};
export const Ve = () => {
  useHistory().push("/verify");
  return <div></div>;
};

export default Home;
