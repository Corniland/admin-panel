import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import UsersList from "./resources/users/list";
import dataProvider from "./providers/data-provider"

import "./App.css";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UsersList} />
  </Admin>
);

export default App;
