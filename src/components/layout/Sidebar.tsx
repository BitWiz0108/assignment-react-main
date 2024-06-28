import MenuIcon from "@mui/icons-material/Menu";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TimerIcon from "@mui/icons-material/Timer";
import StarsIcon from "@mui/icons-material/Stars";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import CampaignIcon from "@mui/icons-material/Campaign";
import PaidIcon from "@mui/icons-material/Paid";
import ReceiptIcon from "@mui/icons-material/Receipt";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Navbar from "./Navbar";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import { INavOptions, ISubOption } from "./type";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
const drawerWidth = 250;

interface Props {
  children: React.ReactNode;
}

const Sidebar = ({ children }: Props) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const path = useLocation();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const options: INavOptions[] = [
    {
      label: "Team Management",
      subOptions: [
        {
          label: "Employee",
          url: "/employees",
          icon: <GroupIcon sx={{ fontSize: "20px", color: "#3a455bd9" }} />,
        },
        {
          label: "OnBoarding",
          url: "/on-boarding",
          icon: <PersonAddIcon sx={{ fontSize: "20px", color: "#3a455bd9" }} />,
        },
        {
          label: "Leave",
          url: "/leave",
          icon: <GroupIcon sx={{ fontSize: "20px", color: "#3a455bd9" }} />,
        },
        {
          label: "Time Tracking",
          url: "/time-tracking",
          icon: <TimerIcon sx={{ fontSize: "20px", color: "#3a455bd9" }} />,
        },
        {
          label: "Rewards",
          url: "/rewards",
          icon: <StarsIcon sx={{ fontSize: "20px", color: "#3a455bd9" }} />,
        },
        {
          label: "Costs",
          url: "/costs",
          icon: <AddCircleIcon sx={{ fontSize: "20px", color: "#3a455bd9" }} />,
        },
        {
          label: "Compensation",
          url: "/compensation",
          icon: <GroupIcon sx={{ fontSize: "20px", color: "#3a455bd9" }} />,
        },
        {
          label: "Requests",
          url: "/requests",
          icon: (
            <DescriptionIcon sx={{ fontSize: "20px", color: "#3a455bd9" }} />
          ),
        },
        {
          label: "Feedback",
          url: "/feedback",
          icon: <CampaignIcon sx={{ fontSize: "20px", color: "#3a455bd9" }} />,
        },
      ],
    },
    {
      label: "Finance",
      subOptions: [
        {
          label: "Payroll",
          url: "/payroll",
          icon: <PaidIcon sx={{ fontSize: "20px", color: "#3a455bd9" }} />,
        },
        {
          label: "Invoices",
          url: "/invoices",
          icon: <ReceiptIcon sx={{ fontSize: "20px", color: "#3a455bd9" }} />,
        },
        {
          label: "Billing",
          url: "/billing",
          icon: (
            <VerifiedUserIcon sx={{ fontSize: "20px", color: "#3a455bd9" }} />
          ),
        },
      ],
    },
  ];

  const drawer = (
    <Box padding={"15px"}>
      <Toolbar sx={{ p: "0 !important" }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          p={"0"}
          gap={"10px"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Box
            bgcolor={"#e64600"}
            border={"1px solid #bf360c"}
            borderRadius={"8px"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <IconButton>
              <PersonIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Box>
          <Box width={"100%"} flex={1} display={isOpen ? "none" : ""}>
            <Typography
              fontSize={13}
              fontWeight={600}
              color={"#3a455b"}
              lineHeight={"normal"}
              sx={{ wordBreak: "break-all" }}
            >
              john dean
            </Typography>
            <Typography
              fontSize={13}
              fontWeight={600}
              color={"#3a455b"}
              lineHeight={"normal"}
              sx={{ wordBreak: "break-all" }}
            >
              john@example.com
            </Typography>
          </Box>
          {!isOpen && (
            <IconButton
              sx={{
                p: "0",
                bgcolor: "transparent !important",
                display: { xs: "none", md: "block" },
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon sx={{ fontSize: "28px", color: "#505a6e" }} />
            </IconButton>
          )}
        </Box>
      </Toolbar>
      <Paper
        sx={{
          p: "0",
          boxShadow: "none",
          width: isOpen ? "fit-content" : "100%",
          bgcolor: "transparent",
        }}
      >
        <Tooltip title={"Dashboard"} placement="right">
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"12px"}
            border={`1px solid ${
              path.pathname === "/" ? "#cfd5df" : "transparent"
            }`}
            borderRadius={"8px"}
            padding={"6px 10px"}
            mt={"10px"}
            width={isOpen ? "fit-content" : "100%"}
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              backgroundColor: path.pathname === "/" ? "#fff" : "transparent",
              "&:hover": {
                bgcolor: "#fff",
                border: "1px solid #cfd5df",
              },
            }}
          >
            <IconButton sx={{ padding: "0" }}>
              <DashboardIcon
                sx={{
                  color: "#3a455b",
                  fontSize: "18px",
                }}
              />
            </IconButton>
            <Typography
              fontSize={14}
              color={"#3a455b"}
              fontWeight={path.pathname === "/" ? "600" : "500"}
              sx={{
                display: isOpen ? "none" : "inherit",
                width: isOpen ? "fit-content" : "100%",
              }}
            >
              Dashboard
            </Typography>
          </Box>
        </Tooltip>
      </Paper>

      <Divider sx={{ margin: "12px 0", borderColor: "#cfd5df" }} />

      {options.map((option: INavOptions, index: number) => (
        <Box key={index}>
          <Typography
            fontSize={"16px"}
            fontWeight={600}
            color={"#3a455bd9"}
            sx={{ display: isOpen ? "none" : "inherit" }}
          >
            {option.label}
          </Typography>
          <List sx={{ gap: "6px", display: "flex", flexDirection: "column" }}>
            {option.subOptions.map((subOption: ISubOption, key: number) => (
              <ListItem
                key={key}
                disablePadding
                component={Link}
                to={subOption.url}
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  width: isOpen ? "fit-content" : "100%",
                }}
              >
                <Tooltip title={subOption.label} placement="right">
                  <ListItemButton
                    sx={{
                      padding: "6px 10px",
                      border: `1px solid ${
                        path.pathname === subOption.url
                          ? "#cfd5df"
                          : "transparent"
                      }`,
                      borderRadius: "8px",
                      gap: "10px",
                      transition: "all 0.4s ease",
                      backgroundColor:
                        path.pathname === subOption.url
                          ? "#fff"
                          : "transparent",
                      ":hover": {
                        bgcolor: "#fff",
                        border: "1px solid #cfd5df",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "auto" }}>
                      {subOption.icon}
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        margin: "0",
                        "& span": {
                          fontSize: "15px",
                          fontWeight:
                            path.pathname === subOption.url ? "600" : "500",
                          color: "#3a455bd9",
                        },
                        display: isOpen ? "none" : "inherit",
                      }}
                      primary={subOption.label}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ margin: "8px 0 12px 0", borderColor: "#cfd5df" }} />
        </Box>
      ))}
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${isOpen ? 73 : drawerWidth}px)` },
          ml: { md: isOpen ? "none" : `${drawerWidth}px` },
          boxShadow: "none !important",
          bgcolor: "#f5f5fa",
          pt: "10px",
          pr: "8px",
          pl: { xs: "8px", md: "0" },
        }}
        color={"transparent"}
      >
        <Toolbar
          sx={{
            bgcolor: "#fff",
            padding: { xs: "10px !important", md: "10px 15px !important" },
            border: "1px solid #cfd5df",
            borderRadius: "12px 12px 0 0",
            alignItems: "flex-start",
          }}
        >
          <Navbar handleDrawerToggle={handleDrawerToggle} />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { md: isOpen ? "fit-content" : drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#f5f5fa",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: isOpen ? "fit-content" : drawerWidth,
              border: "0",
              background: "#f5f5fa",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: isOpen ? "100%" : `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Box
          sx={{
            border: "1px solid #cfd5df",
            borderRadius: "12px 12px 0 0",
            padding: "20px 0",
            marginLeft: isOpen ? "73px" : "none",
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
