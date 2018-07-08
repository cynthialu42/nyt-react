import React from 'react';

const Navbar = (props) => (
    <div>
         <nav id = "navbar" className="navbar navbar-light navbar-expand-lg d-flex justify-content-between bg-light" >
            <div className="brand">
                <a className="navbar-brand" href="/"><h3 className = "nav-colors ancient">New York Times Scrubber</h3></a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                <div className="navbar-nav ml-auto">
                    <a className="nav-item nav-link" href="/"><h5 className = "nav-colors">Home</h5></a>
                    <a className="nav-item nav-link" href="/saved"><h5 className = "nav-colors">Saved</h5></a>
                </div>
            </div> 
        </nav>
    </div>
)


export default Navbar;