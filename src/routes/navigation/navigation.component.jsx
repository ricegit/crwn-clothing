import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div>
        <div className="navigation">
          <Link to="/" className="logo-container">
            <CrwnLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link to="/shop" className="nav-link">
              SHOP
            </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <Link to="/auth" className="nav-link">
                SIGN IN
              </Link>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
