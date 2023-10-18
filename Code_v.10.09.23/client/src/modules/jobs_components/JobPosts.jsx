import { Avatar, MenuItem, Stack, Typography } from "@mui/material";
import { map_pin } from "./../../templates/image_imports";
import { useLocation } from "react-router-dom";
import { format_date } from "../../utils/format_date";

const JobPosts = ({ details, setAD, aD }) => {
  const { pathname } = useLocation();

  const handleClick = () => {
    setAD(details);
  };

  return (
    <MenuItem
      onClick={handleClick}
      sx={{
        paddingBlock: 2,
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: "5px",
        bgcolor: aD.id == details.id ? "whitesmoke" : "#fff",
      }}
    >
      <Stack sx={{ width: "100%" }}>
        <Stack direction="row" sx={{ width: "100%" }}>
          <Typography fontSize={12} flexGrow={1} fontWeight={300}>
            {details.name}
          </Typography>
          {pathname !== "/status" && (
            <Typography fontSize={12} fontWeight={300}>
              Simlong, Batangas City
            </Typography>
          )}
        </Stack>

        <Stack direction="row" alignItems="center" width="100%">
          <Typography fontSize={18} flexGrow={1}>
            {details.job_title}
          </Typography>
          {pathname !== "/status" && (
            <Stack direction="row" spacing={1}>
              <img src={map_pin} className="icon-16x16" alt="" />
              <Typography fontSize={12} fontWeight={300}>
                {format_date(details.created)}
              </Typography>
            </Stack>
          )}
        </Stack>
      </Stack>
    </MenuItem>
  );
};

export default JobPosts;
