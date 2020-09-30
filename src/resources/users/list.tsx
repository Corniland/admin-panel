import * as React from "react";
import { FC } from "react";
import { List, Datagrid, TextField, EmailField, ListProps, BooleanField, Pagination } from "react-admin";
import LengthField from "../../fields/length-field";
import UserShow from "./show";

const UsersList: FC<ListProps> = (props) => (
  <List {...props} pagination={<Pagination rowsPerPageOptions={[100]} />}>
    <Datagrid rowClick="expand" expand={<UserShow id="" basePath="" />}>
      <TextField source="id" sortable={false} />
      <EmailField source="email" sortable={false} />
      <TextField source="username" sortable={false} />
      <LengthField source="liked_projects" sortable={false} />
      <BooleanField source="private_profile" sortable={false} />
      <BooleanField source="banned" sortable={false} />
    </Datagrid>
  </List>
);

export default UsersList;
