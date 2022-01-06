import { useEffect, useRef, useState } from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useLocation } from "react-router-dom";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";
import { useCustomerStore, useLoanStore } from "store/store";

var ps;

function Dashboard(props) {
  const loadCustomers = useCustomerStore(state => state.getAllCustomers)
  const loadLoans = useLoanStore(state => state.getAllLoans)

  const [dataLoading, setDataLoading] = useState(false)
  
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [activeColor, setActiveColor] = useState("info");
  const mainPanel = useRef();
  const location = useLocation();

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return () => {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });

  useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);

  useEffect(() => {
    if(!dataLoading) {
      loadCustomers()
      loadLoans()
      setDataLoading(true)
    }
  }, []) 

  // const handleActiveClick = (color) => {
  //   setActiveColor(color);
  // };

  // const handleBgClick = (color) => {
  //   setBackgroundColor(color);
  // };

  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
      />
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar {...props} />
        <Switch>
          {routes.map((route, key) => {
            return (
              <Route
                path={route.layout + route.path}
                component={route.component}
                key={key}
              />
            );
          })}
        </Switch>
        <Footer fluid />
      </div>
      {/* <FixedPlugin
        bgColor={backgroundColor}
        activeColor={activeColor}
        handleActiveClick={handleActiveClick}
        handleBgClick={handleBgClick}
      /> */}
    </div>
  );
}

export default Dashboard;
