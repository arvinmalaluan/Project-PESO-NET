import { IconButton, MenuItem, Typography } from "@mui/material";

export default function ProfileTemplate({ uniqueId, name, icon }) {
  return (
    <>
      <MenuItem>
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
