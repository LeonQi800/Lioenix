import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchUserInfo} from "../../store/reducers/user.action";
import "./login.css";
import CommonHeader from "../shared/common-header";

export class LoginPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: "",
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
            "email": this.state.email,
            "password": this.state.password
        });
    }

    render(){
        // console.log(this.props.user.isLogin);
        return (
            <div>
                <CommonHeader 
                    title={"This is a Login Page"}
                    link={"Already have account? Click here to sign in"}
                    linkUrl={"/signup"}
                />
                <div className="login__container">
                    <fieldset className="login__fieldset">
                        <fieldset className="login__fieldset__element">
                            <input className="login__input" name="email" type="text" placeholder="Email" onChange={this.handleInputChange}/>
                        </fieldset>
                        <fieldset className="login__fieldset__element">
                            <input className="login__input" name="password" type="text" placeholder="Password" onChange={this.handleInputChange}/>
                        </fieldset>
                        <fieldset className="login__fieldset__element">
                            <button className="login__button" onClick={this.submitLogin}>Login</button>
                        </fieldset>
                    </fieldset>
                </div>
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