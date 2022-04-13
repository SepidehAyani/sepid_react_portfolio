import React from "react";
import {
    CFooter
} from '@coreui/react';

function Footer() {
    return (
        <CFooter>
            <div>
                <a target="_blank" href="https://github.com/SepidehAyani" rel="noreferrer">GitHub</a>&nbsp;&nbsp;&nbsp;
                <a target="_blank" href="https://www.linkedin.com/in/sepidehayani/" rel="noreferrer">LinkedIn</a>&nbsp;&nbsp;&nbsp;
                <a target="_blank" href="https://twitter.com/sepideha" rel="noreferrer">Twitter</a>
            </div>
            <div>
                <a href="https://coreui.io">CoreUI</a>
                <span>&copy; 2022 creativeLabs.</span>
            </div>
            <div>
                <span>Powered by</span>
                <a href="https://coreui.io">CoreUI</a>
            </div>
        </CFooter>
    );
}

export default Footer;