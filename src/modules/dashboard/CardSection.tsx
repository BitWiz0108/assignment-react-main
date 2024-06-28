import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { cardDetail } from "./helper";
import CancelIcon from "@mui/icons-material/Cancel";
import { ICardDetail } from "./type";

const CardSection = () => {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{
        xs: "auto",
        sm: "repeat(2,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(4,1fr)",
        gap: "10px",
      }}
      padding={{ xs: " 0 15px 15px 15px", sm: "0 20px 20px 20px" }}
    >
      {cardDetail.map((item: ICardDetail, index: number) => {
        const { Icon, label, value, percent } = item;
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
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <Icon
                  sx={{
                    color: "#7d879b",
                    fontSize: "24px",
                  }}
                />
                <Typography fontSize={16} fontWeight={500} color={"#3a455bd9"}>
                  {label}
                </Typography>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                marginTop={"20px"}
              >
                <Typography fontSize={20} fontWeight={600} color={"#3a455b"}>
                  {value}
                </Typography>
                <Box display={"flex"} alignItems={"center"}>
                  <CancelIcon sx={{ color: "#009688", fontSize: "20px" }} />
                  <Typography fontSize={16} fontWeight={600} color={"#009688"}>
                    +{percent} %
                  </Typography>
                  <Typography
                    pl={"4px"}
                    fontSize={16}
                    fontWeight={500}
                    color={"#3a455bd9"}
                  >
                    last month
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default CardSection;
