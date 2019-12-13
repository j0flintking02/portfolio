/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function NavbarComponent() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                <h1 className="title">Flintking.com</h1>
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">

                <div className="navbar-end">
                <a className="navbar-item">
                    Home
                </a>

                <a className="navbar-item">
                    About me
                </a>
                <a className="navbar-item">
                    Services
                </a>
                <a className="navbar-item">
                    Technologies
                </a>
                <a className="navbar-item">
                    Contact me
                </a>
                </div>
            </div>
        </nav>
    )
}
