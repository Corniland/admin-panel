import * as React from "react";
import { FC } from "react";
import { Create, CreateProps, Record } from 'react-admin';
import AdminForm from "./form";

const AdminCreate: FC<CreateProps> = (props) => (
    <Create {...props}
        transform={(data: Record) => ({ id: data.id, login: data.login, password: data.password })}
    >
        <AdminForm />
    </Create>
);

export default AdminCreate;