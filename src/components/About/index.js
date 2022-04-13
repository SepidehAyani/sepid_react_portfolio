import React from "react";
import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText
} from '@coreui/react';
import coverImage from '../../assets/images/sepidA.png';

function AboutMe() {
    return (
        <CCard>
            <div className="my-experience">
                <CCardTitle>
                    <div className="section-title secondary-border">
                        About Me
                    </div>
                </CCardTitle>
                <CCardImage orientation="top" src={ coverImage } />
                <CCardBody>
                    <CCardText>
                        <p className="flex-row">
                        Passionate developer who is currently working as Software Engineer at Target, graduated from University of St. Thomas Master program on Computer Science –Big Data Concentration, and 
                            also recently graduated from University of Minnesota front-end coding bootcamp program which provided the opportunity to build a range of skills from REACT and JavaScript, to SQL and MongoDB. 
                            Excited to develop responsive websites, and provide unique perspectives on how end users interact with websites and software platforms with a unique perspective.
                        </p>
                    </CCardText>
                </CCardBody>
            </div>
        </CCard>
    );
}

export default AboutMe;