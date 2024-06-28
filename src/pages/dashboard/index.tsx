import { Box } from "@mui/material";
import { Button, Layout, Select } from "../../components";
import { useState } from "react";
import GetAppIcon from "@mui/icons-material/GetApp";
import AddIcon from "@mui/icons-material/Add";
import { options } from "../../modules/dashboard/helper";
import Dashboard from "../../modules/dashboard";

const DashboardPage = () => {
  const [value, setValue] = useState<string>("monthly");
  return (
    <Layout>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={{ xs: " 0 15px 15px 15px", sm: "0 20px 20px 20px" }}
        gap={"15px"}
        flexWrap={"wrap"}
      >
        <Select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          options={options}
        />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"12px"}
        >
          <Button
            label={"Export"}
            icon={
              <GetAppIcon
                sx={{ fontSize: "17px !important", color: "#505a6e" }}
              />
            }
            onClick={() => console.log("export click")}
          />
          <Button
            label={"New entry"}
            bgColor="#e64600 !important"
            color="#fff"
            border={"1px solid #bf360c"}
            icon={
              <AddIcon sx={{ fontSize: "17px !important", color: "#fff" }} />
            }
            onClick={() => console.log("New entry click")}
          />
        </Box>
      </Box>
      <Dashboard />
    </Layout>
  );
};

export default DashboardPage;
