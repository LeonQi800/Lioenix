import React, {Component} from "react";
import "./footer.css";

 export default class CommonHeader extends Component  {
    render() {
        return (
            <footer className="footer__container">
                <div className="footer__line"></div>
                <div className="footer__tag">
                    <span className="footer__span">
                        <a href="https://linkedin.com/in/leon-chao-qi-085335168">LinkedIn</a>
                        <a href="https://github.com/LeonQi800/Lioenix">Github</a>
                    </span>
                </div>
            </footer>
        )
    }
};