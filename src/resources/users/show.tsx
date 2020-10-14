import * as React from "react";
import { FC } from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  ShowProps,
} from "react-admin";

const UserShow: FC<ShowProps> = (props) => {
  return (
    <Show {...props} title=" ">
      <SimpleShowLayout>
        <TextField source="password" />
        <TextField source="password_salt" />
        <ReferenceArrayField reference="projects" source="liked_projects" sortable={false}>
          <SingleFieldList linkType="show">
            <ChipField source="title" />
          </SingleFieldList>
        </ReferenceArrayField>
      </SimpleShowLayout>
    </Show>
  );
};

export default UserShow;
