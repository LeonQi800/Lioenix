import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./navigation.css";
import { connect } from "react-redux";
import {controlLanguageType} from "../../store/reducers/general.action";

class GlobalNav extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const {isLogin, isEnglish} = this.props;
        return (
            <nav className="nav_main">
                <div className="nav__ul-container">
                    <ul className="nav_container">
                        
                        <li className="nav_item">
                            <Link to="/">{isEnglish ? "Home" : "主页"}</Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/docs">{isEnglish ? "Doc" : "文档"}</Link>
                        </li>
                        {isLogin && 
                        <li className="nav_item">
                            <Link to="/Circle">{isEnglish ? "Circle" : "圈子"}</Link>
                        </li>}
                    
                        {isLogin && <li className="nav_item">
                            <Link to="/forum">{isEnglish ? "Forum" : "论坛"}</Link>
                        </li>}

                        <li className="nav__right-item">
                            <a onClick={this.props.controlLanguageType}>{isEnglish ? "中文" : "English"}</a>
                        </li>
                        {!isLogin && <li className="nav__right-item">
                            <Link to="/signup">{isEnglish ? "Sign Up" : "注册"}</Link>
                        </li>}
                        {!isLogin ? <li className="nav__right-item">
                            <Link to="/login">{isEnglish ? "Login" : "登录"}</Link>
                        </li>: <li className="nav__right-item">
                            <Link to="/setting">{isEnglish ? "Setting" : "设置"}</Link>
                        </li>}
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    general: state.general,
  });
  
  const mapDispatchToProps = {
    controlLanguageType,
  };

export default connect(mapStateToProps, mapDispatchToProps)(GlobalNav);
