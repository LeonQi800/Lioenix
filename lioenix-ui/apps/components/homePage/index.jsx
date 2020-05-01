import React, {Component} from "react";
import {connect} from "react-redux";
import CommonHeader from "../shared/common-header";
import CommonFooter from "../shared/common-footer";

class HomePage extends Component {
    render() {
        console.log(this.props.user)
        return (
            <div>
                 <CommonHeader title={"Home"} />
                HomePage
                <CommonFooter />
            </div>
            
        );
    }
}


const mapStateToProps = (state) => ({
    user: state.user

});


const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);