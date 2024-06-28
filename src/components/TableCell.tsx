import { TableCell as MuiTableCell } from "@mui/material";

interface IProps {
  label: string | React.ReactNode;
}

export const TableCell = ({ label }: IProps) => {
  return (
    <MuiTableCell
      sx={{
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "normal",
      }}
    >
      {label && (
        <span>{label}</span>
      )}
    </MuiTableCell>
  );
};
