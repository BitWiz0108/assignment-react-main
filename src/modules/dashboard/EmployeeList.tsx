import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";
import { employList } from "./helper";
import { IEmployData } from "./type";
import { TableCell, TableContainer } from "../../components";
import RemoveIcon from "@mui/icons-material/Remove";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const EmployeeList = () => {
  const { header, data } = employList;
  return (
      <TableContainer
        title={"Employees"}
        addOnClick={() => console.log("add click")}
        icon={<RemoveIcon />}
        className="employees-grid-span"
      >
        <Box className=" table-responisve">
          <Table className="today-task-section employees-table-section table-scroll">
            <TableHead>
              <TableRow>
                {header.map((item: string, index: number) => (
                  <TableCell key={index} label={item} />
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item: IEmployData, index: number) => (
                <TableRow key={index}>
                  <TableCell
                    label={
                      <Box display={"flex"} gap={1} alignItems={"center"}>
                        <Avatar
                          src={item.image}
                          alt={item.name}
                          sx={{ objectFit: "contain" }}
                        />
                        {item.name}
                      </Box>
                    }
                  />
                  <TableCell label={item.id} />
                  <TableCell label={item.email} />
                  <TableCell label={item.role} />
                  <TableCell
                    label={
                      <Box display={"flex"} gap={1} alignItems={"center"}>
                        <TaskAltIcon sx={{ color: "#1b5e20" }} />
                        {item.status}
                      </Box>
                    }
                  />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
  );
};

export default EmployeeList;
