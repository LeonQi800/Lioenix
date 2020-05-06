import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserInfo } from "../../store/reducers/user.action";
import "./login.css";
import CommonHeader from "../shared/common-header";
import CommonFooter from "../shared/common-footer";
import TextField from "../shared/textField";
import { controlModalOpen } from "../../store/reducers/general.action";
import Modal from "../shared/modal";
import "../shared/css/spinner.css";


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
    const general = this.props.general;
    const user = this.props.user;
    if (user.userInfoStore && user.userInfoStore.hasOwnProperty("user")) {
      return (
        <div>
          <CommonHeader title={general.isEnglish ? "Login" : "登录"} />
          <Modal
            isOpen={true}
            type="success"
            context={
              general.isEnglish
                ? "Welcome back, please click OK to redirect!!"
                : "欢迎回来，请点击OK跳转页面！！"
            }
            buttonFun={this.loginCloseModal}
            buttonTitle="OK"
          />
        </div>
      );
    } else
      return (
        <div>
          <CommonHeader
            title={general.isEnglish ? "Login" : "登录"}
            link={
              general.isEnglish
                ? "Need a account? Click here to sign up."
                : "需要账户？点击这里注册。"
            }
            linkUrl={"/signup"}
          />
          <Modal
            isOpen={user.isError}
            type="error"
            context={
              general.isEnglish
                ? "Email or password not correct."
                : "邮箱或者密码不正确。"
            }
          />
          {user.isLoading ? (
            <div className="loader">Loading...</div>
          ) : (
            <div className="login__container">
              <fieldset className="login__fieldset">
                <fieldset className="login__fieldset__element">
                  <TextField
                    name="email"
                    type="text"
                    placeholder={general.isEnglish ? "Email" : "邮箱"}
                    onChange={this.handleInputChange}
                  />
                </fieldset>
                <fieldset className="login__fieldset__element">
                  <TextField
                    name="password"
                    type="password"
                    placeholder={general.isEnglish ? "Password" : "密码"}
                    onChange={this.handleInputChange}
                  />
                </fieldset>
                <fieldset className="login__fieldset__element login__fieldset__submit">
                  <button className="login__button" onClick={this.submitLogin}>
                    {general.isEnglish ? "Login" : "登录"}
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
  fetchUserInfo,
  controlModalOpen,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
