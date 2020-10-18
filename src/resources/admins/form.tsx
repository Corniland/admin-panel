import * as React from "react";
import { FC } from "react";
import { SimpleForm, TextInput, PasswordInput, required, Record as Rec } from "react-admin";

const validateAdmin = (values: Record<string, any>) => {
  const errors: { password?: string[]; password_confirm?: string[] } = {};

  if (values.password !== values.password_confirm) {
    errors.password = ["Passwords do not match"];
    errors.password_confirm = ["Passwords do not match"];
  }

  return errors;
};

const AdminForm: FC<{ record?: Rec }> = (props) => (
  <SimpleForm {...props} validate={validateAdmin}>
    <TextInput source="login" validate={required()} />
    <PasswordInput source="password" validate={required()} />
    <PasswordInput label="Confirm password" source="password_confirm" validate={required()} />
  </SimpleForm>
);

export default AdminForm;
