import {
  Avatar,
  AvatarGroup,
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";
import { taskList } from "./helper";
import { IMember, ITaskData } from "./type";
import dayjs from "dayjs";
import { LinearProgress, TableCell, TableContainer } from "../../components";
const TaskList = () => {
  const { header, data } = taskList;
  return (
    <TableContainer
      title={"Today's task"}
      addOnClick={() => console.log("add click")}
    >
      <Box className="table-responisve">
        <Table className="today-task-section today-task-row table-scroll">
          <TableHead>
            <TableRow>
              <TableCell
                label={
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": {
                        color: "#aeaeb463",
                      },
                      "&.Mui-checked .MuiSvgIcon-root": {
                        color: "#e64600 ",
                      },
                    }}
                  />
                }
              />

              {header.map((item: string, index: number) => (
                <TableCell key={index} label={item} />
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item: ITaskData, index: number) => (
              <TableRow key={index}>
                <TableCell
                  label={
                    <Checkbox
                      sx={{
                        "& .MuiSvgIcon-root": {
                          color: "#aeaeb463",
                        },
                        "&.Mui-checked .MuiSvgIcon-root": {
                          color: "#e64600 ",
                        },
                      }}
                    />
                  }
                />
                <TableCell label={item.task} />
                <TableCell label={item.value} />
                <TableCell label={dayjs(item.due).format("MMM DD, YYYY")} />
                <TableCell
                  label={
                    <AvatarGroup max={4}>
                      {item.members.map((member: IMember, key: number) => (
                        <Avatar
                          alt={member.name}
                          src={member.image}
                          key={key}
                          sx={{ objectFit: "contain" }}
                        />
                      ))}
                    </AvatarGroup>
                  }
                />
                <TableCell label={<LinearProgress value={item.progress} />} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
};

export default TaskList;
