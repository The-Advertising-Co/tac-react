import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

import logoDefault from "../../assets/images/logo/TAC-Official-Logo.svg";
import logoLight from "../../assets/images/logo/TAC-Official-Logo.svg";
import logoDark from "../../assets/images/logo/logo-dark.png";
import logoSymbolDark from "../../assets/images/logo/logo-symbol-dark.png";
import logoSymbolLight from "../../assets/images/logo/logo-symbol-light.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isDropdownOpen: false,
    };
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  menuTrigger() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  CLoseMenuTrigger() {
    this.setState({ isMenuOpen: false });
  }

  toggleDropdown() {
    this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
  }

  render() {
    const { logo, color = "default-color" } = this.props;
    const { isDropdownOpen } = this.state;

    let logoUrl;
    if (logo === "light") {
      logoUrl = <img src={logoLight} alt="Digital Agency" />;
    } else if (logo === "dark") {
      logoUrl = <img src={logoDark} alt="Digital Agency" />;
    } else if (logo === "symbol-dark") {
      logoUrl = <img src={logoSymbolDark} alt="Digital Agency" />;
    } else if (logo === "symbol-light") {
      logoUrl = <img src={logoSymbolLight} alt="Digital Agency" />;
    } else {
      logoUrl = <img src={logoDefault} alt="Digital Agency" />;
    }

    return (
      <header className={`header-area formobile-menu header--transparent ${color}`}>
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <Link to="/">{logoUrl}</Link>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li className="has-droupdown">
                  <Link to="/">Home</Link>
                </li>
                <li className="has-droupdown">
                  <Link to="#" onClick={this.toggleDropdown}>
                    Service
                  </Link>
                  <ul className={`submenu ${isDropdownOpen ? "active" : ""}`}>
                    <li><Link to="/social-media">Social Media</Link></li>
                    <li><Link to="/pay-per-click">Pay Per Click</Link></li>
                    <li><Link to="/web-design-and-seo">Website Design And SEO</Link></li>
                    <li><Link to="/graphic-design">Graphic Design</Link></li>
                    <li><Link to="/email-marketing">Email Marketing</Link></li>
                  </ul>
                </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <div className="header-btn">
              <Link className="rn-btn" to="/contact">
                <span>Get in touch</span>
              </Link>
            </div>
            {/* Start Hamburger Menu */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span onClick={this.menuTrigger} className="menutrigger text-white">
                <FiMenu />
              </span>
            </div>
            {/* End Hamburger Menu */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
