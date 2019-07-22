import React, {Component} from "react";
// import {userLogin} from "../../store/reducers/user/user.action";
import {connect} from "react-redux";
import axios from "axios";


export class LoginPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            userName: null,
            password: null
        }
    }

    _handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [target.name]: value
          });
    }
    _submitLogin = () => {
        // this.props.userLogin("test1", "123");
        axios({
            baseURL: "//localhost:9000/lioenix/",
            url: "/user/signin",
            method: "POST",
            data: {
                "userName": "test4",
                "password": "123"
            },
            headers: {
                "autorizacion": "lioenix"
            }
        }).then(res => console.log(res))
        .catch(err => console.log(err));
        console.log(this.props.user);
        console.log("im here");
    }

    render(){
        return (
            <div>
                This is a Login Page
                <input name="userName" type="text" placeholder="User Name" onChange={this._handleInputChange}/>
                <input name="password" type="text" placeholder="Password" onChange={this._handleInputChange}/>
                <button className="login-button" onClick={this._submitLogin}>Login</button>
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
    // userLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);