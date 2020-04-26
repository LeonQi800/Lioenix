import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchUserInfo} from "../../store/reducers/user.action";
import "./login.css";
import CommonHeader from "../shared/common-header";
import CommonFooter from "../shared/common-footer";

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
        return (
            <div>
                <CommonHeader 
                    title={"Login"}
                    link={"Need a account? Click here to sign up."}
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
                <CommonFooter />
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