import * as React from "react";
import { FC } from "react";
import {
  ChipField,
  ReferenceArrayField,
  ReferenceManyField,
  Show,
  ShowProps,
  SimpleShowLayout,
  SingleFieldList,
} from "react-admin";

const UserShow: FC<ShowProps> = (props) => {
  return (
    <Show {...props} title=" ">
      <SimpleShowLayout>
        <ReferenceArrayField reference="projects" source="liked_projects" sortable={false}>
          <SingleFieldList linkType="show">
            <ChipField source="title" />
          </SingleFieldList>
        </ReferenceArrayField>
        <ReferenceManyField label="Member Of" reference="projects" target="members">
          <SingleFieldList>
            <ChipField source="title" />
          </SingleFieldList>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

export default UserShow;
