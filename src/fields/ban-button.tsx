import * as React from "react";
import { Button, FieldProps, useRefresh } from "react-admin";
import GavelIcon from "@material-ui/icons/Gavel";
import UndoIcon from "@material-ui/icons/Undo";
import fetchApi from "../utils/fetchApi";

const BanButton: React.FC<FieldProps> = (props) => {
  const { record } = props;

  const [loading, setLoading] = React.useState(false);
  const refresh = useRefresh();

  if (!record) {
    return <div />;
  }

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setLoading(true);

    const path = `/users/${record.id}/ban`;

    if (record.banned) {
      await fetchApi.delete(path);
    } else {
      await fetchApi.post(path);
    }

    refresh();
    setLoading(false);
  };

  if (record.banned) {
    return <Button startIcon={<UndoIcon />} label="Unban" variant="text" onClick={handleClick} disabled={loading} />;
  } else {
    return <Button startIcon={<GavelIcon />} label="Ban" variant="text" onClick={handleClick} disabled={loading} />;
  }
};

export default BanButton;
