import React from "react";
import {
    CListGroup,
    CListGroupItem,
    CButton
} from '@coreui/react';

function Resume() {
    return (
        <section>
            <h1 className="section-title resume-title">My Resume</h1>
            <div className="resume-btn gap-1">
                <CButton color="success" size="lg" href="./SA_Resume22.pdf" download>Click here to download my resume!</CButton>
            </div>
            <br />
            <h6 className="section-title-prof resume-title">Proficiencies</h6>
            <div className="font-me">
                <CListGroup>
                    <CListGroupItem>
                        Curious learner who is skilled in a variety of front and back end languages and technologies. Committed to continuing to grow in my field by learning new technologies and implementing my knowledge and experience in new ways. If I don't know the answer, I will find it!
                    </CListGroupItem>
                </CListGroup>
            </div>
            <h4 className="section-title-FB">Frontend:</h4>
            <CListGroup>
                <CListGroupItem className="CListGroupItem">
                    <p className="prof-p">
                        HTML/CSS
                    </p>
                </CListGroupItem>
                <CListGroupItem className="CListGroupItem">
                    <p className="prof-p">
                        JavaScript
                    </p>
                </CListGroupItem>
                <CListGroupItem className="CListGroupItem">
                    <p className="prof-p">
                        jQuery
                    </p>
                </CListGroupItem>
                <CListGroupItem className="CListGroupItem">
                    <p className="prof-p">
                        Bootstrap
                    </p>
                </CListGroupItem>
            </CListGroup>
            <h4 className="section-title-FB">Backend:</h4>
            <CListGroup>
                <CListGroupItem className="CListGroupItem">
                    <p className="prof-p">
                        JAVA/Springboot
                    </p>
                </CListGroupItem>
                <CListGroupItem className="CListGroupItem">
                    <p className="prof-p">
                        ReactJS
                    </p>
                </CListGroupItem>
                <CListGroupItem className="CListGroupItem">
                    <p className="prof-p">
                        Node
                    </p>
                </CListGroupItem>
                <CListGroupItem className="CListGroupItem">
                    <p className="prof-p">
                        GraphQL
                    </p>
                </CListGroupItem>
                <CListGroupItem className="CListGroupItem">
                    <p className="prof-p">
                        Express
                    </p>
                </CListGroupItem>

                <CListGroupItem className="CListGroupItem">
                    <p className="prof-p">
                        Webpack
                    </p>
                </CListGroupItem>
                <CListGroupItem className="CListGroupItem">
                    <p className="prof-p">
                        SQL, MySQL, NoSQL, MongoDB
                    </p>
                </CListGroupItem>
                <h4 className="section-title-FB">Cloud:</h4>
                <CListGroupItem className="CListGroupItem">
                    <p className="prof-p">
                        AWS (Amazon Web Services)
                    </p>
                </CListGroupItem>
                <CListGroupItem className="CListGroupItem">
                    <p className="prof-p">
                        GCP (Google Cloud Platform)
                    </p>
                </CListGroupItem>
                <h4 className="section-title-FB">Tools:</h4>
                <CListGroupItem className="CListGroupItem">
                    <p className="prof-p">
                        IntelliJ IDEA
                    </p>
                </CListGroupItem>
                <CListGroupItem className="CListGroupItem">
                    <p className="prof-p">
                        Visual Studio
                    </p>
                </CListGroupItem>
            </CListGroup>
        </section>
    );
}

export default Resume;