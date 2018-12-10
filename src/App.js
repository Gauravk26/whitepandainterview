import React from 'react';
import './App.css';
import Judgement from './Judgement';

class App extends React.Component {
  constructor(){
    super();

    };

  render() {
    return (<div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img src="http://www.whitepanda.in/img/full_logo_white.png" width="200" height="40" className="d-inline-block align-top" alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <a className="nav-link" href="#"><span className="glyphicon glyphicon-bullhorn backglyph1 " aria-hidden="true"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><span className="glyphicon glyphicon-comment backglyph1" aria-hidden="true"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" ><span className="glyphicon glyphicon-leaf backglyph1" aria-hidden="true"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><span className="glyphicon glyphicon-shopping-cart backglyph1" aria-hidden="true"></span></a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="sidenav">
             <a href="#about"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span></a>
             <a href="#services"><span className="glyphicon glyphicon-align-left" aria-hidden="true"></span></a>
            <a href="#clients"><span className="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span></a>
             </div>
       <div className="container">
         <Judgement/>
         </div>
        </div>    
            );

  }
}

export default App;
