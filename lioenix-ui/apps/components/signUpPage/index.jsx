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
import "../shared/css/spinner.css";

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
    if (
      email.length != 0 &&
      password.length != 0 &&
      cf_password.length != 0 &&
      username.length != 0 &&
      isSubmitDisable
    ) {
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
      alert(
        this.props.general.isEnglish
          ? "Please input email correctly"
          : "请正确填写邮箱"
      );
    } else if (password === cf_password) {
      this.props.signUpUser({
        username: username,
        email: email,
        password: password,
      });
      this.props.controlModalOpen();
    } else {
      alert(
        this.props.general.isEnglish
          ? "The password did not match the re-typed password"
          : "密码两次输入不一致"
      );
    }
  };

  signUpCloseModal = () => {
    this.props.history.push("/");
  };

  render() {
    const { isSubmitDisable } = this.state;
    const general = this.props.general;
    const user = this.props.user;

    if (user.isRegistered) {
      return (
        <div>
          <CommonHeader title={general.isEnglish ? "Sign Up" : "注册"} />
          <Modal
            isOpen={true}
            type="success"
            context={
              general.isEnglish
                ? "Sign up success, please click OK to redirect!!"
                : "注册成功，请点击OK跳转！！"
            }
            buttonFun={this.signUpCloseModal}
            buttonTitle="OK"
          />
        </div>
      );
    } else
      return (
        <div>
          <CommonHeader
            title={general.isEnglish ? "Sign Up" : "注册"}
            link={
              general.isEnglish
                ? "Already have account? Click here to sign in."
                : "已经有账户？ 点击这里登录。"
            }
            linkUrl={"/login"}
          />
          <Modal
            isOpen={user.isError}
            type="error"
            context={
              general.isEnglish ? "Email already token." : "邮箱已经注册"
            }
          />
          {user.isLoading ? (
            <div className="loader">Loading...</div>
          ) : (
            <div className="sign-up__container">
              <fieldset className="sign-up__fieldset">
                <fieldset className="sign-up__fieldset__element">
                  <TextField
                    name="username"
                    type="text"
                    placeholder={general.isEnglish ? "User Name" : "用户名"}
                    onChange={this.handleInputChange}
                  />
                </fieldset>
                <fieldset className="sign-up__fieldset__element">
                  <TextField
                    name="email"
                    type="email"
                    placeholder={general.isEnglish ? "Email" : "邮箱"}
                    onChange={this.handleInputChange}
                  />
                </fieldset>
                <fieldset className="sign-up__fieldset__element">
                  <TextField
                    name="password"
                    type="password"
                    placeholder={general.isEnglish ? "Password" : "密码"}
                    onChange={this.handleInputChange}
                  />
                </fieldset>
                <fieldset className="sign-up__fieldset__element">
                  <TextField
                    name="cf_password"
                    type="password"
                    placeholder={
                      general.isEnglish ? "Confirm Password" : "确认密码"
                    }
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
                    {general.isEnglish ? "Submit" : "提交"}
                  </button>
                </fieldset>
              </fieldset>
            </div>
          )}
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
