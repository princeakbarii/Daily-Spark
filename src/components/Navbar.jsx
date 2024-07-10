import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    let { toggleMode } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="#">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/business">business</Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">entertainment</Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">general</Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">health</Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">science</Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">sports</Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">technology</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/AboutUs">AboutUs</Link>
          </li>
        
      </ul>
    </div>

      <div>
      <div className="checkbox-wrapper-51">
  <input id="cbx-51" type="checkbox" onClick={toggleMode} />
  <label className="toggle" for="cbx-51">
    <span>
      <svg viewBox="0 0 10 10" height="10px" width="10px">
        <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
      </svg>
    </span>
  </label>
</div>



      </div>

  </div>
</nav>
      </div>
    )
  }
}
