import React from "react";
import {
    CFooter,
    CLink
} from '@coreui/react';

function Footer() {
    return (
        <CFooter>
            <div className="image" name="Links">
                <a href="https://github.com/SepidehAyani">
                    <img alt="GitHub" src="./icons/github_logo.png" /></a>
                <a href="https://www.linkedin.com/in/sepidehayani/">
                    <img alt="LinkedIn" src="./icons/linkedin_logo.png" /></a>
                <a href="https://www.linkedin.com/in/sepidehayani/">
                <img alt="Twitter" src="./icons/twitter_logo.png" /></a>
            </div>
            <div>
                <CLink href="https://coreui.io">CoreUI</CLink>
                <span>&copy; 2022 creativeLabs.</span>
            </div>
            <div>
                <span>Powered by </span>
                <CLink href="https://coreui.io">CoreUI</CLink>
            </div>
        </CFooter>
    );
}

export default Footer;