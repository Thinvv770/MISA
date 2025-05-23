import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isBrowser } from "react-device-detect";

const propTypes = {
  active: PropTypes.string,
};

const defaultProps = {
  active: null,
};

const TabsContext = createContext();

const TabList = ({ className, ...props }) => {
  const classes = isBrowser
    ? classNames("tab-list list-reset mb-0", className)
    : classNames("tab-list-mobile list-reset mb-0", className);

  return <ul {...props} className={classes} />;
};

const Tab = ({ tabId, className, ...props }) => {
  const { activeId, changeTab } = useContext(TabsContext);

  return (
    <li
      {...props}
      className={classNames(
        "tab",
        activeId === tabId && "is-active",
        className
      )}
      role="tab"
      aria-controls={tabId}
      onClick={() => changeTab(tabId)}
    />
  );
};

const TabPanel = ({ id, className, ...props }) => {
  const { activeId } = useContext(TabsContext);

  return (
    <div
      {...props}
      id={id}
      className={classNames(
        "tab-panel",
        activeId === id && "is-active",
        className
      )}
      role="tabpanel"
    />
  );
};

const Tabs = ({ className, active, children, onChange, ...props }) => {
  const [activeId, setActiveId] = useState(active);

  const changeTab = (tabId) => {
    setActiveId(tabId);
    onChange(tabId);
  };

  const classes = classNames("tabs", className);

  return (
    <TabsContext.Provider value={{ activeId, changeTab }}>
      <div {...props} className={classes}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
export { TabList, Tab, TabPanel };
export const useTabsContext = () => useContext(TabsContext);
