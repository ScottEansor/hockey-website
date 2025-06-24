import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavLink from "./NavLink";
import DropDown, { DropDownButton, DropDownLink } from "./DropDown";

export default function Nav({ userData }) {

  const [isOpen, setIsOpen] = useState(false)
  

  return (
    <nav className="navbar bg-body-tertiary sticky-top navbar-expand-md">
      <div className="container-fluid">
        <div className="title navbar-brand">
          Eansor Coaching
        </div>
        <button
          className="navbar-toggler"
          onClick={()=> setIsOpen(prev=> !prev)}
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"navbar-collapse " + (isOpen?"":"collapse") }>
          <ul className="navbar-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/schedule">Schedule Now</NavLink>
            {/* <Link to="/contact">
            Contact
          </Link> */}
            <NavLink to="/camp">Camp</NavLink>
            <NavLink to="/admin">Admin</NavLink>
            <NavLink to="/athome">At Home</NavLink>
            {userData?.status === "not signed in" && (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
            {userData?.status === "signed in" && (
              <DropDown
                label={`${userData.parentFirstName} ${userData.parentLastName[0]}.`}
              >
                <DropDownLink to={'/profile'}>Profile</DropDownLink>
                <DropDownButton onClick={handleLogout}>Logout</DropDownButton>
              </DropDown>

              // <>
              //   <Link to="/profile" className="nav-link profile-link">
              //     {`${userData.parentFirstName} ${userData.parentLastName[0]}.`}
              //   </Link>
              // </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
