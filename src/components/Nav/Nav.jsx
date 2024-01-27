import React, { useState } from "react";
import style from "./Nav.module.css";
import { Link, NavLink, Outlet } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
          <Link to="/">
            <img
              className={style.logo}
              src="https://files.codingninjas.in/pl-ninja-16706.svg"
              alt="logo"
            />
            </Link>

            <h4>Coding Ninja</h4>
          </div>
          <div className={style.nav_details}>
          <button>
            <NavLink to="/courses">
              {({isActive})=>(isActive? "onCourse":"Go to Course")}
            </NavLink>
          </button>
            
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
