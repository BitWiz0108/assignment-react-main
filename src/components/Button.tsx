import { Button as MuiButton } from "@mui/material";

interface IProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  bgColor?: string;
  color?: string;
  border?: string;
}
export const Button = ({
  label,
  icon,
  onClick,
  bgColor = "#fff",
  color = "#3a455b",
  border = "1px solid #cfd5df",
}: IProps) => {
  return (
    <MuiButton
      startIcon={icon}
      onClick={onClick}
      sx={{
        backgroundColor: bgColor,
        color: color,
        border,
        padding: "8px 12px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "500",
        textTransform: "capitalize",
        lineHeight: "normal",
        transition: "all 0.5s ease",
      }}
    >
      {label}
    </MuiButton>
  );
};
