import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const AccordionItem = ({
  className,
  children,
  active,
  triggerKey,
  title,
  imageSrc,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (active) {
      openItem();
    } else {
      closeItem();
    }
  }, [active, triggerKey]);

  const openItem = () => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    }
    setIsActive(true);
  };

  const closeItem = () => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = null;
    }
    setIsActive(false);
  };

  const toggleItem = () => {
    isActive ? closeItem() : openItem();
  };

  const classes = classNames(isActive && "is-dropdown-active", className);

  return (
    <li {...props} className={classes}>
      <div className="accordion-header text-sm" onClick={toggleItem}>
        <div className="accordion-icon"></div>
        <span
          className="h6 m-0"
          style={{ textAlign: "left", color: "blue", fontWeight: "bold" }}
        >
          {title}
        </span>
      </div>
      <div ref={contentRef} className="accordion-content text-xs">
        <div>{children}</div>
      </div>
      {imageSrc && <img src={imageSrc} alt="arrow" />}
    </li>
  );
};

AccordionItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

AccordionItem.defaultProps = {
  children: null,
  active: false,
  title: "",
};

export default AccordionItem;
