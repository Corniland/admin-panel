import * as React from "react";
import { Admin, Resource } from "react-admin";
import UsersList from "./resources/users/list";
import ProjectsList from "./resources/projects/list";
import ProjectShow from "./resources/projects/show";
import AdminsList from "./resources/admins/list";
import AdminCreate from "./resources/admins/create";
import AdminEdit from "./resources/admins/edit";
import dataProvider from "./providers/data-provider";
import authProvider from "./providers/auth-provider";

import "./App.css";

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UsersList} />
    <Resource name="projects" list={ProjectsList} show={ProjectShow} />
    <Resource name="admins" list={AdminsList} create={AdminCreate} edit={AdminEdit} />
  </Admin>
);

export default App;
