import React from "react";
import {NavLink , Outlet} from "react-router-dom"
export function Layout()
{
    return(
        <React.Fragment>
            <main>
                <NavLink to={"/"}>Home</NavLink>{ "°°" }
                <NavLink to={"/login"}>Login</NavLink> { "°°" }
                <NavLink to={"/register"}>Register</NavLink> { "°°" }
            </main>
            <section>
                <Outlet/>
            </section>
        </React.Fragment>
    )
}