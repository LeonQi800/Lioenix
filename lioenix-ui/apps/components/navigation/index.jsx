import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./index.css";

class GlobalNav extends Component {

    constructor(props){
        super(props)
        this.state= {
            Lioenix: true,
            Dashboard: false,
            Leetcode: false,
        }
    }
    _changeHeaderClassName(e){
        switch (e) {
            case 1: this.setState({
                Lioenix: true,
                Dashboard: false,
                Leetcode: false
            });
            break;
            case 2: this.setState({
                Lioenix: false,
                Dashboard: true,
                Leetcode: false
            });
            break;
            case 3: this.setState({
                Lioenix: false,
                Dashboard: false,
                Leetcode: true
            });
            break;
            default:;
        }
    }

    render(){
        const user = this.props.user;
        return (
            <nav className="nav_main">
                <ul className="nav_container">
                    
                    <li className={this.state.Lioenix? "nav_item_active" : "nav_item"}>
                        <Link to="/" onClick={()=>this._changeHeaderClassName(1)}>Lioenix</Link>
                    </li>
                    <li className={this.state.Dashboard? "nav_item_active" : "nav_item"}>
                        <Link to="/dashboard" onClick={()=>this._changeHeaderClassName(2)}>Dashboard</Link>
                    </li>
                   
                    <li className={this.state.Leetcode? "nav_item_active" : "nav_item"}>
                        <Link to="/leetcode" onClick={()=>this._changeHeaderClassName(3)}>Leetcode</Link>
                    </li>
                

                    <li className="nav_login">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default GlobalNav;
