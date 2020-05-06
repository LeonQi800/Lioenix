import React, {Component} from "react";
import "./modal.css";
import {connect} from "react-redux";
import {controlModalClose} from "../../../store/reducers/general.action";

class Modal extends Component {
    render(){
        const {general, isOpen, type, context, buttonTitle, buttonFun, controlModalClose} = this.props;
        return(
            <div>
                {(general.isModalOpened && isOpen) && <div className="modal__overlay">
                    <div className="modal__frame">
                        <span>
                            <p className={type? "modal__header-"+type: "modal__header"}>
                                {type && type.toUpperCase()}
                            </p>
                            <div className="modal__line-break"></div>
                            <p>
                                {context}
                            </p>
                            <button className="modal__close-button" onClick={buttonFun? buttonFun : controlModalClose}>{buttonTitle ? buttonTitle : "Close" }</button>
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
