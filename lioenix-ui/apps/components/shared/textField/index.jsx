import React, {Component} from "react";
import "./textField.css";

export default class TextField extends Component {
    render(){
        return(
            <div className="input__outline">
                <div className="input__frame">
                    <input
                        className={this.props.className ? this.props.className : "input__box"}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        onChange={this.props.onChange}
                        name={this.props.name}
                    />
                </div>

            </div>
        )
    }
}
