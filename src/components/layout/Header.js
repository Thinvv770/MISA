import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  active: PropTypes.bool,
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  active: false,
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = (props) => {
  const {
    className,
    active,
    navPosition,
    hideNav,
    hideSignin,
    bottomOuterDivider,
    bottomDivider,
    ...rest
  } = props;

  const classes = classNames(
    "site-header",
    bottomOuterDivider && "has-bottom-divider",
    className
  );

  return (
    <header {...rest} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-header-inner",
            bottomDivider && "has-bottom-divider"
          )}
        >
          <img
            src={require("./../../assets/images/logo.png")}
            alt="logo"
            width={150}
            height={150}
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
