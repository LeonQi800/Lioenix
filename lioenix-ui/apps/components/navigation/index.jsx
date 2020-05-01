import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./navigation.css";

class GlobalNav extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const {isLogin} = this.props;
        return (
            <nav className="nav_main">
                <div className="nav__ul-container">
                    <ul className="nav_container">
                        
                        <li className="nav_item">
                            <Link to="/">Home</Link>
                        </li>
                        {isLogin && <li className="nav_item">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>}
                    
                        {isLogin && <li className="nav_item">
                            <Link to="/forum">Forum</Link>
                        </li>}

                        {!isLogin && <li className="nav__right-item">
                            <Link to="/signup">Sign Up</Link>
                        </li>}
                        {!isLogin ? <li className="nav__right-item">
                            <Link to="/login">Login</Link>
                        </li>: <li className="nav__right-item">
                            <Link to="/setting">Setting</Link>
                        </li>}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default GlobalNav;
