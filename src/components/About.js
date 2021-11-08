import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/github";
import reactIcon from "@iconify/icons-logos/linkedin";
import vueIcon from "@iconify/icons-logos/gridsome-icon";
// import ReactHintFactory from 'react-hint'
// const ReactHint = ReactHintFactory(React)

// Referenced: https://react-bootstrap.github.io/components/overlays/#overlay-trigger
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
      // the following networks is currently not utilized
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  
                    <img
                    height="210px"
                    src={profilepic}
                    alt="Avatar placeholder"
                    />

                    <br/>

                    <div className="row md-4 fa-3x">
                      <div class="col">
                        <OverlayTrigger
                          placement="bottom"
                          delay={{ show: 150, hide: 400 }}
                          overlay={<Tooltip className="fa-3x"><h3>GitHub</h3></Tooltip>}
                        > 
                        <a href="https://github.com/takehiro-code" target="_blank" class="linkedin"><i class="fab fa-github"></i></a>
                        </OverlayTrigger>
                      </div>

                      <div class="col">
                        <OverlayTrigger
                          placement="bottom"
                          delay={{ show: 150, hide: 400 }}
                          overlay={<Tooltip className="fa-3x"><h3>LinkedIn</h3></Tooltip>}
                          > 
                        <a href="https://www.linkedin.com/in/takehiro-tanaka/" target="_blank" class="github"><i class="fab fa-linkedin"></i></a>
                        </OverlayTrigger>
                      </div>
                    </div>

                    <div class="row md-4  fa-3x">
                      <div class="col">
                        <OverlayTrigger
                          placement="bottom"
                          delay={{ show: 150, hide: 400 }}
                          overlay={<Tooltip className="fa-3x"><h3>Email</h3></Tooltip>}
                          > 
                        <a href="mailto:takehirot47@gmail.com" target="_blank" class="google"><i class="fas fa-envelope-square"></i></a>
                        </OverlayTrigger>
                      </div>
                      <div class="col">
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 150, hide: 400 }}
                            overlay={<Tooltip className="fa-3x"><h3>Resume</h3></Tooltip>}
                            >
                        <a href="./folder/Resume.pdf" target="_blank" class="google"><i class="fal fa-file-alt"></i></a>
                        </OverlayTrigger>
                      </div>
                    </div>
                  </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
