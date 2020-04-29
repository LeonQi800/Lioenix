import React, {Component} from "react";
import "./modal.css";
import {connect} from "react-redux";
import {controlModalClose} from "../../../store/reducers/general.action";

class Modal extends Component {
    render(){
        return(
            <div>
                {(this.props.general.isModalOpened && this.props.isOpen) && <div className="modal__overlay">
                    <div className="modal__frame">
                        <span>
                            <p className={this.props.type? "modal__header-"+this.props.type: "modal__header"}>
                                {this.props.type && this.props.type.toUpperCase()}
                            </p>
                            <p>
                                {this.props.context}
                            </p>
                            <button className="modal__close-button" onClick={this.props.controlModalClose}>Close</button>
                        </span>
                    </div>
                </div>}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    general: state.general
});

const mapDispatchToProps = {
    controlModalClose,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
