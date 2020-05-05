import React, { useState, useEffect} from 'react';

const HomePageContent = (props) => {
    return (
        <div className="content__frame">
            <div className="content__container">
                <h2>Fuzzing Firefox with WebIDL</h2>
                <p>
                    {"Fuzzing, or fuzz testing, is an automated approach for testing the safety and stability of software. For the past 3 years, the Firefox fuzzing team has been developing a new fuzzer to identify security vulnerabilities in the implementation of WebAPIs in Firefox. This fuzzer leverages the WebAPIs’ own WebIDL definitions …"}
                </p>
                <hr />
            </div>
            <div className="content__container">
                <h2>A Taste of WebGPU in Firefox</h2>
                <p>
                    {"We are excited to bring WebGPU support to Firefox because it will allow richer and more complex graphics applications to run portably on the web. WebGPU is an emerging API, designed from the ground up within the W3C, to provide access to the graphics and computing capabilities of hardware on …"}
                </p>
                <hr />
            </div>
            <div className="content__container">
                <h2>Firefox 75: Ambitions for April</h2>
                <p>
                    {"Firefox 75 is chock full of handy new dev tooling: instant evaluation in the web console, event breakpoints for WebSockets, and more. New web platform features include HTML lazy loading for images, the CSS min(), max(), and clamp() functions, public static class fields, and additions to Web Animations API support. …"}
                </p>
            </div>
        </div>
    );
}

export default HomePageContent;