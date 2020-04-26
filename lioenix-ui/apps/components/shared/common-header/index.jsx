import React, {Component} from "react";
import "./header.css";

 export default class CommonHeader extends Component  {
    render() {
        const {title, subtitle, link, linkUrl} = this.props;
        return (
            <div className="header__container">
                <div className="header__title">
                    <span>
                        {title}
                    </span>
                </div>
                <p className="header__subtitle">
                    {subtitle}
                </p>
                <div className="header__link-container">
                    <a className="header__link" href={linkUrl}>
                        <span className="header__link-span">{link}</span>
                    </a>
                </div>
                <div className="header__line"></div>
            </div>
        )
    }
};