import React, {Component} from "react";
import GlobalNav from "./navigation";
import {connect} from "react-redux";
import {fetchUserInfo} from "../store/reducers/user.action";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from "./loginPage";
import HomePage from "./homePage";
import SignUpPage from "./signUpPage";
import UserCirclePage from "./userCirclePage";
import SettingPage from "./setting";
import DocumentsPage from "./docPage";
import ForumPage from "./forumPage";
import { createBrowserHistory } from 'history';


const browserHistory = createBrowserHistory();


export class App extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const user = this.props.user;
        const general = this.props.general;
        // const user = {"message":"==========Get completed!===============","userInfo":{"firstName":"T","lastName":"K","isDeleted":false,"roleType":1,"avatar":0,"_id":"5d1947f134a3d559000cfaf0","email":"test4@gmail.com","userName":"test4","__v":0}}
        // console.log(user);
        return (
            <div className="lioenix_main">
                <Router history={browserHistory}>
                    <div className="lioenix_router">
                        <GlobalNav 
                            isLogin={user.isLogin}
                            isEnglish={general.isEnglish} 
                        />
                        <Switch>
                            <Route component={LoginPage} path="/login" />
                            <Route exact component={HomePage} path="/" />
                            <Route component={UserCirclePage} path="/circle" />
                            <Route component={ForumPage} path="/forum" />
                            <Route component={SettingPage} path="/setting" />
                            <Route component={SignUpPage} path="/signup"/>
                            <Route component={DocumentsPage} path="/docs"/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    // (state, ownProps), ownProps is optional
    user: state.user,
    general: state.general,
});

const mapDispatchToProps = {
    // Dispatch action
    fetchUserInfo,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);