import { PiletApi } from "piral-base";
import * as React from "react";
import { Link } from "react-router-dom";

const DashboardT = () => {
  return (
    <div>
      <h1>Please Work</h1>
      <p>I don't want the menu to show here</p>
    </div>
  );
};

export function setupShell(app: PiletApi) {
  app.registerPageLayout("dashboard", ({ children }) => (
    <>
      <div>Header Landing</div>
      <Link to='/'>Click to redirect to Home Layout</Link>
      <div>Navigation </div>
      {children}
      <div> footer </div>
    </>
  ));
  app.registerPage("/dashboard", DashboardT, {
    layout: "dashboard",
  });
}
