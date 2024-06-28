import { Box, TableContainer as MuiTableContainer } from "@mui/material";
import { TableTitle } from "./TableTitle";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "./IconButton";

interface IProps {
  title: string;
  addOnClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const TableContainer = ({
  title,
  addOnClick,
  children,
  icon,
  className
}: IProps) => {
  return (
    <MuiTableContainer
      sx={{
        bgcolor: "#fff",
        border: "1px solid #cfd5df",
        borderRadius: "10px",
        overflow: "hidden",
      }}
      className={className}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"10px"}
        gap={"15px"}
      >
        <TableTitle label={title} />
        <IconButton onClick={addOnClick}>
          {icon ? (
            icon
          ) : (
            <AddIcon sx={{ fontSize: "20px", color: "#505a6e" }} />
          )}
        </IconButton>
      </Box>
      {children}
    </MuiTableContainer>
  );
};
