import {
  Box,
  IconButton as MuiIconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/Work";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "../IconButton";
interface IProps {
  handleDrawerToggle: () => void;
}

const Navbar = ({ handleDrawerToggle }: IProps) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      width={"100%"}
      alignItems={"center"}
      flexWrap={{ xs: "wrap", sm: "nowrap" }}
      gap={1}
    >
      <Box display="flex" alignItems={"center"} gap={2}>
        <MuiIconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { md: "none" }, p: "0", minWidth: "auto", ml: "0" }}
        >
          <MenuIcon sx={{ color: "#505a6ed" }} />
        </MuiIconButton>
        <Box display="flex" gap={1} alignItems={"center"}>
          <WbSunnyIcon sx={{ color: "#f9a825" }} />
          <Typography fontSize={16} fontWeight={600} color={"#3a455b"}>
            Good Morning Dean!
          </Typography>
        </Box>
      </Box>

      <Box width={{ xs: "100%", sm: "auto" }}>
        <Box display="flex" gap={{ xs: "6px", sm: "8px" }} width={"100%"}>
          <Paper
            component="form"
            sx={{
              p: "0px 6px 0 8px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid #d0d9eb",
              borderRadius: "8px",
              boxShadow: "none",
              height: { xs: "36px", sm: "40px" },
              width: "100%",
              maxWidth: { xs: "100%", md: "290px" },
            }}
          >
            <SearchIcon sx={{ color: "#3a455b7a" }} />
            <InputBase
              sx={{
                flex: 1,
                width: "100%",
                p: "0",
                "&>input": {
                  p: "0",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#3a455b",
                },
              }}
              placeholder="Quick search"
            />
            <MuiIconButton type="button" sx={{ p: "0px" }} aria-label="search">
              <Typography
                sx={{
                  bgcolor: "#ebf0f5",
                  width: { xs: "26px", sm: "30px" },
                  height: { xs: "26px", sm: "30px" },
                  borderRadius: { xs: "5px", sm: "6px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                /
              </Typography>
            </MuiIconButton>
          </Paper>
          <IconButton>
            <WorkIcon
              sx={{ color: "#505a6e", fontSize: { xs: "18px", sm: "21px" } }}
            />
          </IconButton>

          <IconButton>
            <NotificationsIcon
              sx={{ color: "#505a6e", fontSize: { xs: "18px", sm: "22px" } }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
