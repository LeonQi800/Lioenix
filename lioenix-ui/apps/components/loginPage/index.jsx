import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserInfo } from "../../store/reducers/user.action";
import "./login.css";
import CommonHeader from "../shared/common-header";
import CommonFooter from "../shared/common-footer";
import TextField from "../shared/textField";
import { controlModalOpen } from "../../store/reducers/general.action";
import Modal from "../shared/modal";

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  };
  submitLogin = () => {
    this.props.fetchUserInfo({
      email: this.state.email,
      password: this.state.password,
    });
    this.props.controlModalOpen();
  };

  loginCloseModal = () => {
    this.props.history.push("/");
  };

  render() {
    if (
      this.props.user.userInfoStore &&
      this.props.user.userInfoStore.hasOwnProperty("user")
    ) {
      return (
        <div>
          <CommonHeader title={"Login"} />
          <Modal
            isOpen={true}
            type="success"
            context="Welcome back, please click OK to redirect!!"
            buttonFun={this.loginCloseModal}
            buttonTitle="OK"
          />
        </div>
      );
    } else
      return (
        <div>
          <CommonHeader
            title={"Login"}
            link={"Need a account? Click here to sign up."}
            linkUrl={"/signup"}
          />
          <Modal
            isOpen={this.props.user.isError}
            type="error"
            context="Email or password not correct."
          />
          <div className="login__container">
            <fieldset className="login__fieldset">
              <fieldset className="login__fieldset__element">
                <TextField
                  name="email"
                  type="text"
                  placeholder="Email"
                  onChange={this.handleInputChange}
                />
              </fieldset>
              <fieldset className="login__fieldset__element">
                <TextField
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={this.handleInputChange}
                />
              </fieldset>
              <fieldset className="login__fieldset__element login__fieldset__submit">
                <button className="login__button" onClick={this.submitLogin}>
                  Login
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
  fetchUserInfo,
  controlModalOpen,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
