import React from 'react'
import { NavLink } from 'react-router-dom'

export const Error = () => {
    return (
        <>
            <section id="error-page">
                <div className=" content flex flex-col content-center justify-center">
                    <h2 className="text-center text-9xl">404</h2>
                    <h4 className="text-center"> Sorry! Page not found</h4>
                    <p className="text-center" >
                        Oops! It seems like the page you're trying to access doesn't exist.
                        If you believe there's an issue, feel free to report it, and we'll
                        look into it.
                    </p>
                    <div className="btns flex justify-center items-center h-screen gap-4">
                        <NavLink className="text-[rgb(96,96,237)]" to="/">Return home</NavLink>
                        <NavLink className="text-[rgb(96,96,237)]" to="/contact">Report problem</NavLink>
                    </div>

                </div>
            </section>
        </>
    )
}


