import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { employPayroll } from "./helper";
import { IEmployPayroll } from "./type";
import { TableTitle } from "../../components";
import RemoveIcon from "@mui/icons-material/Remove";

const EmployeePayroll = () => {
  return (
    <Box
      border={"1px solid #cfd5df"}
      borderRadius={"10px"}
      bgcolor={"#f5f5fa"}
      overflow={"hidden"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"#fff"}
        padding={"10px"}
      >
        <TableTitle label="Employee Payrolls" />
        <RemoveIcon />
      </Box>
      <Box
        borderTop={"1px solid #cfd5df"}
        display={"grid"}
        gridTemplateColumns={{
          xs: "auto",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(6,1fr)",
          gap: "10px",
        }}
        padding={"10px"}
      >
        {employPayroll.map((item: IEmployPayroll, index) => {
          const { label, value, Icon } = item;
          return (
            <Card
              sx={{
                bgcolor: "#fff",
                borderRadius: "12px",
                boxShadow: "none",
                border: "1px solid #cfd5df",
                height: "100%",
                "&>div": {
                  padding: "16px !important",
                },
              }}
            >
              <CardContent>
                <Typography
                  fontSize={16}
                  fontWeight={500}
                  color={"#3a455bd9"}
                  mb={"10px"}
                >
                  {label}
                </Typography>
                <Box display={"flex"} gap={1}>
                  <Icon
                    sx={{
                      color: "#7d879b",
                      fontSize: "24px",
                    }}
                  />
                  <Typography fontSize={16} fontWeight={600} color={"#3a455b"}>
                    {value}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default EmployeePayroll;
