import React, {Component} from "react";
import GlobalNav from "./navigation";
import {connect} from "react-redux";
import {fetchUserInfo} from "../store/reducers/user/user.action";

export class App extends Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        fetchUserInfo();
        console.log("WIP ", this.props.user);
    }
    
    render(){
        return (
            <GlobalNav />
        );
    }
}

const mapStateToProps = (state) => ({
    // (state, ownProps), ownProps is optional
    user: state.user
});

const mapDispatchToProps = {
    // Dispatch action
    fetchUserInfo
};
export default connect(mapStateToProps, mapDispatchToProps)(App);