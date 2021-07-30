
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import CustomersTable from "views/CustomersTable";
import LoansTable from "views/LoansTable";
import PaymentsTable from "views/PaymentsTable";
import EmployeesTable from "views/EmployeesTable";
// import Notifications from "views/Notifications.js";
// import Typography from "views/Typography.js";
// // import TableList from "views/Tables.js";
// import Maps from "views/Map.js";
// import UserPage from "views/User.js";
// import UpgradeToPro from "views/Upgrade.js";

let routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/customers",
    name: "Clientes",
    icon: "nc-icon nc-single-02",
    component: CustomersTable,
    layout: "/admin",
  },
  {
    path: "/loans",
    name: "Préstamos",
    icon: "nc-icon nc-credit-card",
    component: LoansTable,
    layout: "/admin",
  },
  {
    path: "/payments",
    name: "Pagos",
    icon: "nc-icon nc-money-coins",
    component: PaymentsTable,
    layout: "/admin",
  },
  {
    path: "/employees",
    name: "Cobradores",
    icon: "nc-icon nc-user-run",
    component: EmployeesTable,
    layout: "/admin",
  },
  {
    path: "/wallet",
    name: "Rutas",
    icon: "nc-icon nc-pin-3",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];
export default routes;
