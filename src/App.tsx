import * as React from "react";
import { Admin, Resource } from "react-admin";
import UsersList from "./resources/users/list";
import ProjectsList from "./resources/projects/list";
import ProjectShow from "./resources/projects/show";
import AdminsList from "./resources/admins/list";
import dataProvider from "./providers/data-provider";

import "./App.css";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      list={UsersList}
    />
    <Resource
      name="projects"
      list={ProjectsList}
      show={ProjectShow}
    />
    <Resource
      name="admins"
      list={AdminsList}
    />
  </Admin>
);

export default App;
