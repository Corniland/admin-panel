import * as React from "react";
import { FC } from "react";
import { Edit, EditProps, Record } from "react-admin";
import AdminForm from "./form";

const AdminEdit: FC<EditProps> = (props) => (
  <Edit {...props} transform={(data: Record) => ({ id: data.id, login: data.login, password: data.password })}>
    <AdminForm />
  </Edit>
);

export default AdminEdit;
