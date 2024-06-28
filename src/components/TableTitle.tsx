import { Typography } from "@mui/material";

interface IProps {
  label: string;
}

export const TableTitle = ({ label }: IProps) => {
  return (
    <Typography fontSize={16} fontWeight={600} color={"#3a455b"}>
      {label}
    </Typography>
  );
};
