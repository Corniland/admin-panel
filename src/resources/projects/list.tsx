import * as React from "react";
import { FC } from "react";
import {
  List,
  Datagrid,
  TextField,
  ListProps,
  BooleanField,
  Pagination,
  NumberField,
  ReferenceField,
  DeleteButton,
} from "react-admin";

const ProjectsList: FC<ListProps> = (props) => (
  <List {...props} pagination={<Pagination rowsPerPageOptions={[100]} />} bulkActionButtons={false}>
    <Datagrid rowClick="show">
      <TextField source="id" sortable={false} />
      <TextField source="title" sortable={false} />
      <ReferenceField label="Owner" source="owner" reference="users" sortable={false}>
        <TextField source="username" />
      </ReferenceField>
      <TextField source="status" sortable={false} />
      <BooleanField source="published" sortable={false} />
      <NumberField source="likes" sortable={false} />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default ProjectsList;
