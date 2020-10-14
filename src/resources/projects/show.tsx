import { TitleProps } from "ra-ui-materialui/lib/layout/Title";
import * as React from "react";
import { FC } from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceArrayField,
  SingleFieldList,
  ShowProps,
  BooleanField,
  NumberField,
  ImageField,
  ReferenceField,
  DeleteButton,
  ShowActionsProps,
  TopToolbar,
} from "react-admin";

const ProjectTitle: FC<TitleProps> = ({ record }) => {
  return <span>Project {record ? `"${record.title}"` : ""}</span>;
};

const ProjectActions: FC<ShowActionsProps> = ({ basePath, data, resource }) => (
  <TopToolbar>
    <DeleteButton basePath={basePath} record={data} resource={resource} />
  </TopToolbar>
);

const ProjectShow: FC<ShowProps> = (props) => {
  return (
    <Show {...props} title={<ProjectTitle />} actions={<ProjectActions />}>
      <SimpleShowLayout>
        <ImageField label="Cover picture" source="cover_picture_url" title="title" />
        <TextField source="title" />
        <TextField source="short_description" />
        <TextField source="description" />
        <ReferenceField label="Owner" source="owner" reference="users" sortable={false}>
          <TextField source="username" />
        </ReferenceField>
        <ReferenceArrayField reference="users" source="members">
          <SingleFieldList>
            <ChipField source="username" />
          </SingleFieldList>
        </ReferenceArrayField>
        <TextField source="status" />
        <BooleanField source="published" />
        <NumberField source="likes" />
        <TextField source="id" />
      </SimpleShowLayout>
    </Show>
  );
};

export default ProjectShow;
