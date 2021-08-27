import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PageLoader from "@/components/PageLoader";

const Dashboard = lazy(() =>
  import(/*webpackChunkName:'DashboardPage'*/ "@/pages/Dashboard")
);

const ManagementDashboard = lazy(() =>
  import(
    /*webpackChunkName:'ManagementDashboardPage'*/ "@/pages/ManagementDashboard"
  )
);

const CalendarBoard = lazy(() =>
  import(/*webpackChunkName:'CalendarBoardPage'*/ "@/pages/CalendarBoard")
);
const Admin = lazy(() =>
  import(/*webpackChunkName:'AdminPage'*/ "@/pages/Admin")
);

const Wq5508 = lazy(() =>
  import(/*webpackChunkName:'Wq5508Page'*/ "@/pages/Wq5508")
);

const Irb = lazy(() => import(/*webpackChunkName:'IrbPage'*/ "@/pages/Irb"));
const CoverageGovernment = lazy(() =>
  import(
    /*webpackChunkName:'CoverageGovernmentPage'*/ "@/pages/CoverageGovernment"
  )
);

const Logout = lazy(() =>
  import(/*webpackChunkName:'LogoutPage'*/ "@/pages/Logout")
);
const NotFound = lazy(() =>
  import(/*webpackChunkName:'NotFoundPage'*/ "@/pages/NotFound")
);

export default function AppRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <PublicRoute path="/" component={Dashboard} exact />
          <PublicRoute
            path="/managementdashboard"
            component={ManagementDashboard}
            exact
          />
          <PublicRoute path="/calendar" component={CalendarBoard} exact />
          <PublicRoute component={Wq5508} path="/wq5508" exact />
          <PublicRoute component={Irb} path="/irb" exact />
          <PublicRoute
            component={CoverageGovernment}
            path="/Government Coverage"
            exact
          />
          <PublicRoute component={Admin} path="/admin" exact />

          <PublicRoute component={Logout} path="/logout" exact />
          <PublicRoute path="/login" render={() => <Redirect to="/" />} />
          <Route
            path="*"
            component={NotFound}
            render={() => <Redirect to="/notfound" />}
          />
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}
