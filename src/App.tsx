import * as React from "react";
import { Admin, Resource } from "react-admin";
import UsersList from "./resources/users/list";
import ProjectsList from "./resources/projects/list";
import dataProvider from "./providers/data-provider"

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
    />
  </Admin>
);

export default App;
