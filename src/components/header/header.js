import React, { Component } from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Main from '../main';
import Cars from '../pages/cars';
import Contacts from '../pages/contacts';
import Drivers from '../pages/drivers';
import Events from '../pages/events';

import './header.css';


export default class Header extends Component {


    state = {
        show: false,
        menuClick: false,
        clicked: 'home'
    };
    
    
    dropDownThrow = () => {
        if (!this.state.show) {
            this.setState({
                show: true
            })
        }
        else  this.setState({show: false})
    }
    
    menuClick = () => {
        if (!this.state.menuClick) {
            this.setState({
                menuClick: true
            })
        }
        else  this.setState({menuClick: false})
    }

    changeColor = (e) => {
        const { id } = e.currentTarget;
        this.setState({ clicked: id });
    }

    render() {

        const { show, menuClick, clicked } = this.state;

        let showClassName = 'dropdown-menu';
        let menuClickClassName = 'collapse navbar-collapse';

        if (show) {
            showClassName += ' show';
        }
        else showClassName = 'dropdown-menu';

        if (menuClick) {
            menuClickClassName += ' show';
        }
        else menuClickClassName = 'collapse navbar-collapse';

        return (
            <div className="content">
                <Router>
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
                    <span className="navbar-brand">My Portfolio</span>
                    <button className="navbar-toggler" type="button" onClick={this.menuClick} data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span> 
                    </button>

                    <div className={menuClickClassName} id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className={clicked === "home" ? "nav-item active" : "nav-item"} id="home" onClick={this.changeColor}>
                                <Link className="nav-link" to="/">Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className={clicked === "cars" ? "nav-item active" : "nav-item"} id="cars" onClick={this.changeColor}>
                                <Link className="nav-link"  to="/cars">Cars</Link>
                            </li>
                            <li className={clicked === "drivers" ? "nav-item active" : "nav-item"} id="drivers" onMouseUp={this.changeColor}>
                                <Link className="nav-link"  to="/drivers">Drivers</Link>
                            </li>
                            <li className={clicked === "events" ? "nav-item active" : "nav-item"} id="events" onMouseUp={this.changeColor}>
                                <Link className="nav-link" to="/events">Events</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"
                                    onClick={this.dropDownThrow}>More</a>
                                <div className={showClassName}>
                                    <Link className="dropdown-item" to="/contacts">Contacts</Link>
                                    <a className="dropdown-item" href="#">item</a>
                                    <a className="dropdown-item" href="#">item</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/cars" component={Cars}/>
                        <Route exact path="/drivers" component={Drivers}/>
                        <Route exact path="/events" component={Events}/>
                        <Route exact path="/contacts" component={Contacts}/>

                    </Switch>
                </Router>
            </div>
        )
    };
};