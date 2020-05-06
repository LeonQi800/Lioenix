import React, { useState, useEffect } from 'react';

const HomePageSidebar = (props) => {
    return (
        <div className="sidebar__frame">
            <div className="sidebar__container">
                <ul className="sidebar__ul">
                    <li>
                        <p>Get Start</p>
                        <p>Become sponsor</p>
                        <p>Web tools</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HomePageSidebar;