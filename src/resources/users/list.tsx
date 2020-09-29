import * as React from "react";
import { FC } from "react";
import { List, Datagrid, TextField, EmailField, ListProps, BooleanField, Pagination } from "react-admin";

const UsersList: FC<ListProps> = (props) => (
  <List {...props} pagination={<Pagination rowsPerPageOptions={[100]} />}>
    <Datagrid rowClick="edit">
      <TextField source="id" sortable={false} />
      <EmailField source="email" sortable={false} />
      <TextField source="login" sortable={false} />
      <TextField source="password" sortable={false} />
      <TextField source="password_salt" sortable={false} />
      <BooleanField source="private_profile" sortable={false} />
      <TextField source="liked_projects" sortable={false} />
      <BooleanField source="banned" sortable={false} />
    </Datagrid>
  </List>
);

export default UsersList;
