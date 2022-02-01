import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
    
        <div>
             <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
      </ul> 
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      Light mode  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<label className="form-check-label"  htmlFor="flexSwitchCheckDefault">
      
      <input type="checkbox"  className="form-check-input"  onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
      <span className="lever"></span> Dark mode
      </label>
      </div>
      
</div>
    </div>
  
 </nav> 
        </div>
    )
}
Navbar.propTypes={title: PropTypes.string}

