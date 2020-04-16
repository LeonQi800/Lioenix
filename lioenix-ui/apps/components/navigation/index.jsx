import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./navigation.css";

class GlobalNav extends Component {

    constructor(props){
        super(props)
        this.state= {
            homeClass: true,
            dashboardClass: false,
            forumClass: false,
        }
    }
    _changeHeaderClassName(e){
        switch (e) {
            case 1: this.setState({
                homeClass: true,
                dashboardClass: false,
                forumClass: false
            });
            break;
            case 2: this.setState({
                homeClass: false,
                dashboardClass: true,
                forumClass: false
            });
            break;
            case 3: this.setState({
                homeClass: false,
                dashboardClass: false,
                forumClass: true
            });
            break;
            default:;
        }
    }

    render(){
        const {isLogin} = this.props;
        return (
            <nav className="nav_main">
                <ul className="nav_container">
                    
                    <li className={this.state.homeClass? "nav_item_active" : "nav_item"}>
                        <Link to="/" onClick={()=>this._changeHeaderClassName(1)}>Home</Link>
                    </li>
                    {isLogin && <li className={this.state.dashboardClass? "nav_item_active" : "nav_item"}>
                        <Link to="/dashboard" onClick={()=>this._changeHeaderClassName(2)}>Dashboard</Link>
                    </li>}
                   
                    {isLogin && <li className={this.state.forumClass? "nav_item_active" : "nav_item"}>
                        <Link to="/forum" onClick={()=>this._changeHeaderClassName(3)}>Forum</Link>
                    </li>}
                

                    {!isLogin ? <li className="nav_login">
                        <Link to="/login">Login</Link>
                    </li>: <li className="nav_logout">
                        <Link to="/logout">Logout</Link>
                    </li>}
                </ul>
            </nav>
        );
    }
}

export default GlobalNav;
