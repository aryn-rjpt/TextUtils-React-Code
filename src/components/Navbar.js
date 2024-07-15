import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar({ title = "Set Title Here", displayMode, changeMode }) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${displayMode} border-bottom border-body`} data-bs-theme={displayMode}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                    </ul>
                    <div className={`form-check form-switch `}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={changeMode}/>

                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
}

