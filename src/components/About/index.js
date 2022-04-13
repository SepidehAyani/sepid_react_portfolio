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
                <CCardImage orientation="top" src={ coverImage } />
                <CCardBody>
                    <CCardText>
                        <p className="flex-row">
                            Passionate developer who is currently working as a Software Engineer at Target, graduated from University of Malaya MBA program in Malaysia, 
                            and University of St. Thomas Master program on Computer Science –Big Data Concentration, and 
                            just recently graduated from University of Minnesota front-end coding bootcamp program 
                            which provided the opportunity to build a range of skills from REACT and JavaScript, to SQL and MongoDB. <br/>
                            Excited to keep growing my skills, develop responsive websites, and work on challenging and exciting projects that allow me to implement my skills and provide unique perspectives 
                            on how end users interact with websites and software platforms.
                        </p>
                    </CCardText>
                </CCardBody>
            </div>
        </CCard>
    );
}

export default AboutMe;