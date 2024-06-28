import { Box, Table, TableBody, TableHead, TableRow } from "@mui/material";
import { TableCell, TableContainer } from "../../components";
import { scheduleList } from "./helper";
import { IScheduleData, IScheduleDetail, IScheduleHeader } from "./type";

const Schedule = () => {
  const { header, data } = scheduleList;
  const handleColor = (type: string) => {
    switch (type) {
      case "blue":
        return "#5555ff";
      case "orange":
        return "#e64600";
      case "darkGreen":
        return "#193c50";
      case "green":
        return "#3c7841";
      case "pink":
        return "#af23aa";
      case "lightGreen":
        return "#289655";
      case "red":
        return "#9b2837";
    }
  };
  const handleBgColor = (type: string) => {
    switch (type) {
      case "blue":
        return "#ebebff";
      case "orange":
        return "#e6460029";
      case "darkGreen":
        return "#193c5026";
      case "green":
        return "#3c784124";
      case "pink":
        return "#af23aa26";
      case "lightGreen":
        return "#28965517";
      case "red":
        return "#9b28371a";
    }
  };

  return (
    <TableContainer
      title={"Schedule"}
      addOnClick={() => console.log("add click")}
    >
      <Box className="table-responisve">
        <Table className="today-task-section schedule-table-section table-scroll">
          <TableHead>
            <TableRow>
              {header.map((item: IScheduleHeader, index: number) => (
                <TableCell key={index} label={item.name} />
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item: IScheduleData, index: number) => (
              <TableRow key={index}>
                <TableCell label={item.time} />
                {item.detail.map((detail: IScheduleDetail, key: number) => (
                  <TableCell
                    label={
                      <Box
                        className={detail.label ? "date-bg-color" : ""}
                        color={handleColor(detail.status || "")}
                        bgcolor={handleBgColor(detail.status || "")}
                        borderColor={handleColor(detail.status || "")}
                      >
                        {detail.label}
                      </Box>
                    }
                    key={key}
                  />
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
};

export default Schedule;
