import * as React from "react";
import { FC } from "react";
import { FieldProps } from "react-admin";

const LengthField: FC<FieldProps> = (props) => {
  const { record, source } = props;

  if (!record) {
    return <div />;
  }

  const length = source ? record[source].length : record.length;

  return <b>{length}</b>;
};

export default LengthField;
