import * as React from "react";
import { Admin, Resource, ShowGuesser } from "react-admin";
import UsersList from "./resources/users/list";
import dataProvider from "./providers/data-provider"

import "./App.css";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      list={UsersList}
      show={ShowGuesser}
    />
    <Resource name="projects" />
  </Admin>
);

export default App;
