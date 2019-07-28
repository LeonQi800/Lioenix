import React, {Component} from "react";
import {connect} from "react-redux";


export class DashboardPage extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [target.name]: value
          });
    }

    render(){
        console.log(this.props.user.isLogin);
        return (
            <div>{this.props.user.isLogin ?
                <div>
                    This is a DashBoard Page
                    <input name="userName" type="text" placeholder="User Name" onChange={this.handleInputChange}/>
                    <input name="password" type="text" placeholder="Password" onChange={this.handleInputChange}/>
                </div>
            : <div>Please Login</div>}</div>
        )
    }
}

const mapStateToProps = (state) => ({
    // (state, ownProps), ownProps is optional
    user: state.user
});

const mapDispatchToProps = {
    // Dispatch action
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);