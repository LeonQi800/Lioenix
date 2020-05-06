import React, { Component } from "react";
import { connect } from "react-redux";
import CommonHeader from "../shared/common-header";
import CommonFooter from "../shared/common-footer";

class ForumsPage extends Component {
  render() {
    if (this.props.user.isLogin) {
      return (
        <div>
          <CommonHeader title={"Forum"} subtitle={"Subtitle"} />
          <div>
            <span>
              <p></p>
            </span>
          </div>
          <CommonFooter />
        </div>
      );
    } else return <div>Please login</div>;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  general: state.general,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ForumsPage);
