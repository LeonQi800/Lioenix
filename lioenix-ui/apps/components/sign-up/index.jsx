import React, {Component} from "react";
import {connect} from "react-redux";
import {signUpUser} from "../../store/reducers/user.action";
import "./sign-up.css";
import CommonHeader from "../shared/common-header";
import CommonFooter from "../shared/common-footer";

export class SignUpPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            cf_password: "",
            username: "",
            registered: false,
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [target.name]: value
          });
    }
    submitSignUp = () => {
        const {username, email, password, cf_password} = this.state;
        if (password === cf_password){
            this.props.signUpUser({
                "username": username,
                "email": email,
                "password": password
            });
            this.setState({
                registered: true
            })
        }
    }

    render(){
        return (
            <div>
                <CommonHeader 
                    title={"Sign Up"}
                    link={"Already have account? Click here to sign in."}
                    linkUrl={"/login"}
                />
                {this.state.registered ? <div>registered success!</div>:
                    <div className="login__container">
                        <fieldset className="login__fieldset">
                            <fieldset className="login__fieldset__element">
                                <input className="login__input" name="username" type="text" placeholder="User Name" onChange={this.handleInputChange}/>
                            </fieldset>
                            <fieldset className="login__fieldset__element">
                                <input className="login__input" name="email" type="email" placeholder="Email" onChange={this.handleInputChange}/>
                            </fieldset>
                            <fieldset className="login__fieldset__element">
                                <input className="login__input" name="password" type="password" placeholder="Password" onChange={this.handleInputChange}/>
                            </fieldset>
                            <fieldset className="login__fieldset__element">
                                <input className="login__input" name="cf_password" type="password" placeholder="Confirm Password" onChange={this.handleInputChange}/>
                            </fieldset>
                            <fieldset className="login__fieldset__element">
                                <button className="sign-up__button" onClick={this.submitSignUp}>Submit</button>
                            </fieldset>
                        </fieldset>
                    </div>}
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
    signUpUser
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);