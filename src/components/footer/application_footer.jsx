import { Footer, Link, Button } from "carbon-components-react";
import React, { Component } from "react";
import "./application_footer.css";

class Application_footer extends Component {
  render() {
    return (
      <Footer>
        <div className="bx--footer-info ">
          <div className="bx--footer-info__item">
            <p className="bx--footer-label" />
            <Link className="footer_links" href="#">
              {this.props.link1}
            </Link>
          </div>
          <div className="bx--footer-info__item">
            <p className="bx--footer-label" />
            <Link className="footer_links" href="#">
              {this.props.link2}
            </Link>
          </div>
          <div className="bx--footer-info__item">
            <p className="bx--footer-label" />
            <Link className="footer_links" href="#">
              {this.props.link3}
            </Link>
          </div>
        </div>
        <div className="bx--footer-cta">
          <Button className="footer_buttons" type="submit">
            Upload Project
          </Button>
        </div>
        <div className="bx--footer-cta footer_buttons_last ">
          <Button className="footer_buttons" type="submit">
            Import Project
          </Button>
        </div>
      </Footer>
    );
  }
} //eof class

export default Application_footer;
