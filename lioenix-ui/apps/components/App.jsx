import React, {Component} from "react";
import GlobalNav from "./navigation";
import {connect} from "react-redux";
import {fetchUserInfo} from "../store/reducers/user/user.action";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from "./login";


export class App extends Component{
    constructor(props){
        super(props);
    }
    
    // componentDidMount = () => {
    //     this.props.fetchUserInfo({
    //         "userName": "test4",
    //         "password": "123"
    //     })
    // }

    render(){
        const user = this.props.user;
        console.log(user);
        return (
            <div className="lioenix_main">
                {!user.isLoading && 
                    <Router>
                        <div className="lioenix_router">
                            <GlobalNav user={user}/>
                            <Switch>
                                <Route component={LoginPage} path="/login" />
                                <Route exact component={HomePage} path="/" />
                                <Route component={DashboardPage} path="/dashboard" />
                                <Route component={LeetcodePage} path="/leetcode" />
                            </Switch>
                        </div>
                    </Router>}
            </div>
        );
    }
}

const HomePage = () => <div>Home Page</div>
const DashboardPage = () => <div>This is Dashboard Page</div>
const LeetcodePage = () => <div>This is Leetcode Page</div>


const mapStateToProps = (state) => ({
    // (state, ownProps), ownProps is optional
    user: state.user
});

const mapDispatchToProps = {
    // Dispatch action
    fetchUserInfo,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);