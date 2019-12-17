import React from "react";
import { Layout, Header, Navigation, Drawer } from "react-mdl";
import { Link } from "react-router-dom";
import "../css/header.css";

const NavBar = () => {
  return (
    <>
      <div className="demo-big-content">
        <Layout>
          <Header
            className="styled-header"
            title={
              <span className="header-logo-container">
                <img src="https://spennycreative.com/wp-content/themes/spennycreative3/images/logo2-compressor.png" alt="spennycreative logo" />
              </span>
            }
            scroll
          >
            <Navigation>
              <Link className="sc-nav-link" to="/">
                Home
              </Link>
              <Link className="sc-nav-link" to="/history">
                History
              </Link>
              <Link className="sc-nav-link" to="/projects">
                Projects
              </Link>
              <Link className="sc-nav-link" to="/skills">
                Skills
              </Link>
              <Link className="sc-nav-link" to="/contact">
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <span className="header-logo-container">
                <img src="https://spennycreative.com/wp-content/themes/spennycreative3/images/logo2-compressor.png" alt="spennycreative logo" />
              </span>
            }
          >
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/history">History</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
        </Layout>
      </div>
    </>
  );
};

export default NavBar;
