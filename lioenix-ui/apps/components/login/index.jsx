import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchUserInfo} from "../../store/reducers/user.action";


export class LoginPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            userName: "",
            password: ""
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [target.name]: value
          });
    }
    submitLogin = () => {
        this.props.fetchUserInfo({
            "userName": this.state.userName,
            "password": this.state.password
        });
    }

    render(){
        // console.log(this.props.user.isLogin);
        return (
            <div>
                This is a Login Page
                <input name="userName" type="text" placeholder="User Name" onChange={this.handleInputChange}/>
                <input name="password" type="text" placeholder="Password" onChange={this.handleInputChange}/>
                <button className="login-button" onClick={this.submitLogin}>Login</button>
            </div>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);