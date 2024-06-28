import {
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
} from "@mui/material";

interface IOption {
  label: string;
  value: string;
}
interface IProps {
  onChange: (e: SelectChangeEvent<string>) => void;
  value: string;
  options: IOption[];
}
export const Select = ({ onChange, value, options }: IProps) => {
  return (
    <MuiSelect
      sx={{
        border: "0",
        bgcolor: "#fff",
        boxShadow: "none",
        borderRadius: "8px",
        "&>div": { padding: "8px 0 8px 12px" },
        fontSize: "14px",
        fontWeight: "600",
        color: "#3a455b",
        "& fieldset": {
          border: "1px solid #cfd5df !important",
        },
      }}
      value={value}
      onChange={onChange}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
    >
      <MenuItem value="">
        <em>Select</em>
      </MenuItem>
      {options.map((option: IOption, index: number) => (
        <MenuItem value={option.value} key={index}>
          {option.label}
        </MenuItem>
      ))}
    </MuiSelect>
  );
};
