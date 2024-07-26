import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="container-fluid top-bar p-3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4">
              <h4 className="text-light">Thapa Technical</h4>
            </div>

            <div className="col-col-xxl-10 col-xl-10 col-lg-9 col-md-9 col-sm-8 d-flex justify-content-end align-items-center">
              <nav>
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  to={"/"}
                >
                  home
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  to={"/about"}
                >
                  About us
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  to={"/service"}
                >
                  Service
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
