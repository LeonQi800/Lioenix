import React, {Component} from "react";
import "./header.css";

 export default class CommonHeader extends Component  {
    render() {
        const {title, subtitle, link, linkUrl} = this.props;
        return (
            <div className="header__container">
                <h1 className="header__title">
                    {title}
                </h1>
                <p className="header__subtitle">
                    {subtitle}
                </p>
                <a className="header__link" href={linkUrl}>
                    <span className="header__span">{link}</span>
                </a>
                <hr/>
            </div>
        )
    }
};