import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserArticle } from "../../store/reducers/article.action";
import CommonFooter from "../shared/common-footer";
import CircleContext from "./circleContext";
import "./UserCirclePage.css";

export class UserCirclePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getUserArticle();
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  };

  render() {
    const general = this.props.general;
    const article = this.props.article;

    if (this.props.user.isLogin) {
      return (
        <div>
          <div className="circle__nav">
            <nav className="circle__nav-main">
              <div className="circle__nav-ul__div">
                <ul className="circle__nav_ul">
                  <li>
                    <a>{general.isEnglish ? "Actives" : "活动"}</a>
                  </li>
                  <li>
                    <a>{general.isEnglish ? "Posts" : "发布"}</a>
                  </li>
                  <li>
                    <a>{general.isEnglish ? "Favorites" : "收藏"}</a>
                  </li>
                  <li>
                    <a>{general.isEnglish ? "Circles" : "圈子"}</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="circle__nav-break-line" />
          </div>

          <div className="circle__context">
            <CircleContext />
          </div>

          <CommonFooter />
        </div>
      );
    } else return <div>Please Login</div>;
  }
}

const mapStateToProps = (state) => ({
  // (state, ownProps), ownProps is optional
  user: state.user,
  general: state.general,
  article: state.article,
});

const mapDispatchToProps = {
  getUserArticle,
  // Dispatch action
};
export default connect(mapStateToProps, mapDispatchToProps)(UserCirclePage);
