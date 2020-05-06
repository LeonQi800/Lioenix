import React, {Component} from "react";
import {connect} from "react-redux";
import CommonHeader from "../shared/common-header";
import CommonFooter from "../shared/common-footer";

class DocumentsPage extends Component {
    render() {
        return (
            <div>
                 <CommonHeader title={"Documents"} />
                 <div>
                    <span>
                        <p>
                            2020/5/2 Development Log:
                            
                        </p>
                    </span>
                 </div>
                <CommonFooter />
            </div>
            
        );
    }
}


const mapStateToProps = (state) => ({
    user: state.user,
    general: state.general,
});


const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsPage);