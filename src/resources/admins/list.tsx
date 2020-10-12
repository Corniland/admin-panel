import * as React from "react";
import { FC } from "react";
import { List, Datagrid, TextField, ListProps, Pagination, EditButton, DeleteButton } from "react-admin";

const AdminsList: FC<ListProps> = (props) => (
  <List {...props} pagination={<Pagination rowsPerPageOptions={[100]} />} bulkActionButtons={false}>
    <Datagrid>
      <TextField source="id" sortable={false} />
      <TextField source="login" sortable={false} />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default AdminsList;
