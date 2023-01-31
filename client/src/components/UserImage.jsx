import { Box } from "@mui/material";
import { ENDPOINT } from "../state/Endpoint";



const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${ENDPOINT}assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
