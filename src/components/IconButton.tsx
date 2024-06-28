import { IconButton as MuiIconButton } from "@mui/material";

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const IconButton = ({ children, onClick }: IProps) => {
  return (
    <MuiIconButton
      sx={{
        bgcolor: "#fff",
        width: { xs: "36px", sm: "40px" },
        height: { xs: "36px", sm: "40px" },
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #d0d9eb",
        transition: "all 0.5s ease",
        ":hover": {
          background: "#e6460024",
          borderColor: "#e64600",
          "& span": {
            color: "#e64600 !important",
          },
          "& svg": {
            fill: "#e64600 !important",
          },
        },
      }}
      onClick={() => onClick && onClick()}
    >
      {children}
    </MuiIconButton>
  );
};
