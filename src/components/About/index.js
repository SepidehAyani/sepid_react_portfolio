import React from "react";
import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText
} from '@coreui/react';
import coverImage from '../../assets/images/alps.jpg';

function AboutMe() {
    return (
        <CCard>
            <div className="my-experience">
                <CCardTitle>
                    <div className="section-title secondary-border">
                        About Me
                    </div>
                </CCardTitle>
                <CCardImage orientation="top" src={coverImage} />
                <CCardBody>
                    <CCardText>
                        <p className="flex-row">
                            Passionate developer currently working as a Software Engineer at Target. Holds an MBA from the University of Malaya in Malaysia and a Master’s in Computer Science with a concentration in Big Data from the University of St. Thomas in St. Paul, MN.
                            Recently completed the Full Stack Web Development Certificate program at the University of Minnesota, which provided the opportunity to build a range of front-end coding skills from REACT and JavaScript to SQL and MongoDB. <br />
                            Excited to keep growing my skills, develop responsive websites, and work on challenging and exciting projects that allow me to implement my skills and provide unique perspectives on how end users interact with websites and software platforms.
                        </p>
                    </CCardText>
                </CCardBody>
            </div>
        </CCard>
    );
}

export default AboutMe;