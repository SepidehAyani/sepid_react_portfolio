import React from "react";
import "../../App.css";
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
  CImage,
} from "@coreui/react";
import { CCardTitle, CCardText, CButton } from "@coreui/react";

function Projects() {
  return (
    <CAccordion flush>
      <div className="projects">
        <CAccordionItem itemKey={2} className="my-experience">
          <CAccordionHeader>
            <CCardTitle>National Park Spotter</CCardTitle>
          </CAccordionHeader>
          <div className="my-projects">
            <CAccordionBody>
              <div className="center-img">
                <CImage
                  src={require(`../../assets/projectImages/NPS.png`).default}
                  alt="National Park Spotter"
                  className="img-thumbnail mx-1"
                  key="National Park Spotter"
                />
              </div>
              <CCardText>
                <h5 className="flex-row">
                  This is an application that allows the user to see an
                  interactive map of US and National Parks in each state, and by
                  clicking on each park, user is able to see information about
                  the park, some images and comments. User is able to create an
                  account and login to their account to add any parks to their
                  fav list for future references.
                </h5>
              </CCardText>

              <div className="GHBtn">
                <CButton
                  target="_blank"
                  href="https://github.com/SepidehAyani/national-parks-spotter"
                >
                  GitHub Repo
                </CButton>
              </div>
              <div className="GHBtn">
                <CButton
                  target="_blank"
                  href="https://park-spotter.herokuapp.com/"
                >
                  Deployed App
                </CButton>
              </div>
            </CAccordionBody>
          </div>
        </CAccordionItem>
        <CAccordionItem itemKey={4} className="my-experience">
          <CAccordionHeader>
            <CCardTitle>Mix It Up</CCardTitle>
          </CAccordionHeader>
          <div className="my-projects">
            <CAccordionBody>
              <div className="center-img">
                <CImage
                  src={
                    require(`../../assets/projectImages/mix_it_up.png`).default
                  }
                  alt="Mix It Up"
                  className="img-thumbnail mx-1"
                  key="Mix It Up"
                />
              </div>
              <CCardText>
                <h5 className="flex-row">
                  This is a mobile friendly app which allows users to access a
                  library of available cocktails with their name, instructions
                  and ingredients.{" "}
                </h5>
              </CCardText>

              <div className="GHBtn">
                <CButton
                  target="_blank"
                  href="https://github.com/SepidehAyani/mixitup"
                >
                  GitHub Repo
                </CButton>
              </div>
              <div className="GHBtn">
                <CButton
                  target="_blank"
                  href="https://mixitupapp.herokuapp.com/"
                >
                  Deployed App
                </CButton>
              </div>
            </CAccordionBody>
          </div>
        </CAccordionItem>
        <CAccordionItem itemKey={2} className="my-experience">
          <CAccordionHeader>
            <CCardTitle>Note Taker</CCardTitle>
          </CAccordionHeader>
          <div className="my-projects">
            <CAccordionBody>
              <div className="center-img">
                <CImage
                  src={
                    require(`../../assets/projectImages/note_taker.png`).default
                  }
                  alt="Note Taker"
                  className="img-thumbnail mx-1"
                  key="Note Taker"
                />
              </div>
              <CCardText>
                <h5 className="flex-row">
                  This application called Note Taker and it can be used to write
                  and save notes. Note Taker will use an Express.js for its back
                  end and will save and retrieve note data from a JSON file.{" "}
                </h5>
              </CCardText>

              <div className="GHBtn">
                <CButton
                  target="_blank"
                  href="https://github.com/SepidehAyani/note_taker"
                >
                  GitHub Repo
                </CButton>
              </div>
              <div className="GHBtn">
                <CButton
                  target="_blank"
                  href="https://young-sea-70654.herokuapp.com/"
                >
                  Deployed App
                </CButton>
              </div>
            </CAccordionBody>
          </div>
        </CAccordionItem>
        <CAccordionItem itemKey={2} className="my-experience">
          <CAccordionHeader>
            <CCardTitle>Tech Blog</CCardTitle>
          </CAccordionHeader>
          <div className="my-projects">
            <CAccordionBody>
              <div className="center-img">
                <CImage
                  src={
                    require(`../../assets/projectImages/tech_blog.png`).default
                  }
                  alt="Tech Blog"
                  className="img-thumbnail mx-1"
                  key="Tech Blog"
                />
              </div>
              <CCardText>
                <h5 className="flex-row">
                  This is a CMS-style blog site similar to a Wordpress site,
                  where developers can publish their blog posts and comment on
                  other developers??? posts as well. This site completely is built
                  from scratch and deployed to Heroku. This app follows the MVC
                  paradigm in its architectural structure, using Handlebars.js
                  as the templating language, Sequelize as the ORM, and the
                  express-session npm package for authentication.{" "}
                </h5>
              </CCardText>

              <div className="GHBtn">
                <CButton
                  target="_blank"
                  href="https://github.com/SepidehAyani/tech_blog"
                >
                  GitHub Repo
                </CButton>
              </div>
              <div className="GHBtn">
                <CButton
                  target="_blank"
                  href="https://techblogch.herokuapp.com/"
                >
                  Deployed App
                </CButton>
              </div>
            </CAccordionBody>
          </div>
        </CAccordionItem>
        <CAccordionItem itemKey={1} className="my-experience">
          <CAccordionHeader>
            <CCardTitle>Budget Tracker</CCardTitle>
          </CAccordionHeader>
          <div className="my-projects">
            <CAccordionBody>
              <div className="center-img">
                <CImage
                  src={
                    require(`../../assets/projectImages/budget_tracker.png`)
                      .default
                  }
                  alt="Budget Tracker"
                  className="img-thumbnail mx-1"
                  key="Budget Tracker"
                />
              </div>
              <CCardText>
                <h5 className="flex-row">
                  This is a Budget Tracker application utilizing IndexedDb. The
                  main focus of this unit was Progressive Web Applications
                  (PWA's) and this application allows for online/offline access
                  and functionality. The user will be able to add expenses and
                  deposits to their budget with or without a connection. When
                  entering transactions offline, they should populate the total
                  when brought back online.
                </h5>
              </CCardText>

              <div className="GHBtn">
                <CButton
                  target="_blank"
                  href="https://github.com/SepidehAyani/pwa_budget_tracker"
                >
                  GitHub Repo
                </CButton>
              </div>
              <div className="GHBtn">
                <CButton
                  target="_blank"
                  href="budget-tracker-app22.herokuapp.com/"
                >
                  Deployed App
                </CButton>
              </div>
            </CAccordionBody>
          </div>
        </CAccordionItem>
        <CAccordionItem itemKey={3} className="my-experience">
          <CAccordionHeader>
            <CCardTitle>Social Network API(NoSQL)</CCardTitle>
          </CAccordionHeader>
          <div className="my-projects">
            <CAccordionBody>
              <div className="center-img">
                <CImage
                  src={
                    require(`../../assets/projectImages/social_network_api.png`)
                      .default
                  }
                  alt="Social Network API(NoSQL)"
                  className="img-thumbnail mx-1"
                  key="Social Network API(NoSQL)"
                />
              </div>
              <a href="https://github.com/SepidehAyani/social_network_api"></a>
              <CCardText>
                <h5>
                  This is not a deployed app. Please click the demo to watch a
                  walk through video.
                </h5>
              </CCardText>

              <div className="GHBtn">
                <CButton
                  target="_blank"
                  href="https://github.com/SepidehAyani/social_network_api"
                >
                  GitHub Repo
                </CButton>
              </div>
              <div className="GHBtn">
                <CButton
                  target="_blank"
                  href="https://github.com/SepidehAyani/social_network_api#demo"
                >
                  Demo
                </CButton>
              </div>
            </CAccordionBody>
          </div>
        </CAccordionItem>

        <CAccordionItem itemKey={5} className="my-experience">
          <CAccordionHeader>
            <CCardTitle>Regex Tutorial (GitHub Gist)</CCardTitle>
          </CAccordionHeader>
          <div className="my-projects">
            <CAccordionBody>
              <div className="center-img">
                <CImage
                  src={require(`../../assets/projectImages/regex.png`).default}
                  alt="Regex Tutorial"
                  className="img-thumbnail mx-1"
                  key="Regex Tutorial"
                />
              </div>
              <CCardText>
                <h5 className="flex-row">
                  Need to learn about Regular Expression? Below you can find a
                  tutorial on how to validate emails using Regex!
                </h5>
              </CCardText>

              <div className="GHBtn">
                <CButton
                  target="_blank"
                  href="https://gist.github.com/SepidehAyani/8b4351540bf64f1662334c5b8738d423"
                >
                  Click Here!
                </CButton>
              </div>
            </CAccordionBody>
          </div>
        </CAccordionItem>
      </div>
    </CAccordion>
  );
}

export default Projects;
