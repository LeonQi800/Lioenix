import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpUser, checkEmail } from "../../store/reducers/user.action";
import { controlModalOpen } from "../../store/reducers/general.action";
import "./sign-up.css";
import CommonHeader from "../shared/common-header";
import CommonFooter from "../shared/common-footer";
import TextField from "../shared/textField";
import Modal from "../shared/modal";
import { Email_reg } from "../shared/utils";

export class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      cf_password: "",
      username: "",
      isSubmitDisable: true,
    };
  }

  componentDidUpdate = () => {
    const {
      email,
      password,
      cf_password,
      username,
      isSubmitDisable,
    } = this.state;
    if (email.length != 0 && password.length != 0 && cf_password.length != 0 && username.length != 0 && isSubmitDisable) {
      this.setState({
        isSubmitDisable: false,
      });
    }
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  };

  submitSignUp = () => {
    const { username, email, password, cf_password } = this.state;
    if (!Email_reg.test(String(email).toLowerCase())) {
      alert("Please input email correctly");
    } else if (password === cf_password) {
      this.props.signUpUser({
        username: username,
        email: email,
        password: password,
      });
      this.props.controlModalOpen();
    } else {
      alert("The password did not match the re-typed password");
    }
  };

  signUpCloseModal = () => {
    this.props.history.push("/");
  };

  render() {
    const { isSubmitDisable } = this.state;
    if (this.props.user.isRegistered) {
      return (
        <div>
          <CommonHeader title={"Sign Up"} />
          <Modal
            isOpen={true}
            type="success"
            context="Sign up success, please click OK to redirect!!"
            buttonFun={this.signUpCloseModal}
            buttonTitle="OK"
          />
        </div>
      );
    } else
      return (
        <div>
          <CommonHeader
            title={"Sign Up"}
            link={"Already have account? Click here to sign in."}
            linkUrl={"/login"}
          />
          <Modal
            isOpen={this.props.user.isError}
            type="error"
            context="Email already token."
          />

          <div className="sign-up__container">
            <fieldset className="sign-up__fieldset">
              <fieldset className="sign-up__fieldset__element">
                <TextField
                  name="username"
                  type="text"
                  placeholder="User Name"
                  onChange={this.handleInputChange}
                />
              </fieldset>
              <fieldset className="sign-up__fieldset__element">
                <TextField
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={this.handleInputChange}
                />
              </fieldset>
              <fieldset className="sign-up__fieldset__element">
                <TextField
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={this.handleInputChange}
                />
              </fieldset>
              <fieldset className="sign-up__fieldset__element">
                <TextField
                  name="cf_password"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={this.handleInputChange}
                />
              </fieldset>
              <fieldset className="sign-up__fieldset__element">
                <button
                  disabled={isSubmitDisable}
                  className={
                    isSubmitDisable
                      ? "sign-up__button sign-up__button-disable"
                      : "sign-up__button"
                  }
                  onClick={this.submitSignUp}
                >
                  Submit
                </button>
              </fieldset>
            </fieldset>
          </div>
          <CommonFooter />
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
  signUpUser,
  checkEmail,
  controlModalOpen,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
