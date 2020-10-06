import * as React from "react";
import { FC } from "react";
import { List, Datagrid, TextField, EmailField, ListProps, BooleanField, Pagination, DeleteButton } from "react-admin";
import BanButton from "../../fields/ban-button";
import LengthField from "../../fields/length-field";
import UserShow from "./show";

const UsersList: FC<ListProps> = (props) => (
  <List {...props} pagination={<Pagination rowsPerPageOptions={[100]} />} bulkActionButtons={false}>
    <Datagrid rowClick="expand" expand={<UserShow />}>
      <TextField source="id" sortable={false} />
      <EmailField source="email" sortable={false} />
      <TextField source="username" sortable={false} />
      <LengthField source="liked_projects" sortable={false} />
      <BooleanField source="private_profile" sortable={false} />
      <BooleanField source="banned" sortable={false} />
      <DeleteButton />
      <BanButton />
    </Datagrid>
  </List>
);

export default UsersList;
