import { Box, Grid } from "@mui/material";
import CardSection from "./CardSection";
import TaskList from "./TaskList";
import EmployeeList from "./EmployeeList";
import EmployeePayroll from "./EmployeePayroll";
import Schedule from "./Schedule";
import "./today-task.css";
const Dashboard = () => {
  return (
    <>
      <Box>
        <CardSection />
      </Box>
      <Box
        bgcolor={"#fff"}
        padding={{ xs: "15px", sm: "15px 20px" }}
        borderTop={"1px solid #cfd5df"}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={{
            xs: "auto",
            xl: "repeat(2,1fr)",
            gap: "10px",
          }}
        >
          <TaskList />
          <Schedule />
          <EmployeeList />
          <Box sx={{ gridColumn: { xs: "1 / span 1", xl: "1 / span 2" } }}>
            <EmployeePayroll />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
