import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav d-flex justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/posts">Blog Post</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/weather">Weather Forecase</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">YouTube Clone</a>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
}