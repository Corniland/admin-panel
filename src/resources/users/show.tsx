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
        <ReferenceManyField label="Project Created" reference="projects" target="owner">
          <SingleFieldList linkType="show">
            <ChipField source="title" />
          </SingleFieldList>
        </ReferenceManyField>
        <ReferenceManyField label="Member Of" reference="projects" target="members">
          <SingleFieldList linkType="show">
            <ChipField source="title" />
          </SingleFieldList>
        </ReferenceManyField>
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
