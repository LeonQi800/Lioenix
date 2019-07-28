import React, {Component} from "react";
import GlobalNav from "./navigation";
import {connect} from "react-redux";
import {fetchUserInfo} from "../store/reducers/user/user.action";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from "./login";
import DashboardPage from "./dashboard";


export class App extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const user = this.props.user;
        // const user = {"message":"==========Get completed!===============","userInfo":{"firstName":"T","lastName":"K","isDeleted":false,"roleType":1,"avatar":0,"_id":"5d1947f134a3d559000cfaf0","email":"test4@gmail.com","userName":"test4","__v":0}}
        // console.log(user);
        return (
            <div className="lioenix_main">
                {!user.isLoading && 
                    <Router>
                        <div className="lioenix_router">
                            <GlobalNav isLogin={user.isLogin}/>
                            <Switch>
                                <Route component={LoginPage} path="/login" />
                                <Route exact component={HomePage} path="/" />
                                <Route component={DashboardPage} path="/dashboard" />
                                <Route component={FroumPage} path="/forum" />
                                <Route component={LogoutPage} path="/logout" />
                            </Switch>
                        </div>
                    </Router>}
            </div>
        );
    }
}

const HomePage = () => <div>Home Page</div>
const FroumPage = () => <div>This is Froum Page</div>
const LogoutPage = () => <div>Logout Page</div>


const mapStateToProps = (state) => ({
    // (state, ownProps), ownProps is optional
    user: state.user
});

const mapDispatchToProps = {
    // Dispatch action
    fetchUserInfo,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);