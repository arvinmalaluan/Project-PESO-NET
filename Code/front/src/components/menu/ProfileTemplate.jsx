import { IconButton, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProfileTemplate({ uniqueId, name, icon, path, set }) {
  const navigate = useNavigate();

  return (
    <>
      <MenuItem
        onClick={() => {
          navigate(`${path}`);
          set(null);
        }}
      >
        <div
          style={{
            backgroundColor: "whitesmoke",
            width: 40,
            height: 40,
            display: "flex",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </div>
        <Typography ml={2}>{name}</Typography>
      </MenuItem>
    </>
  );
}
