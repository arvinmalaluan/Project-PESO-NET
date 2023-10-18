import {
  Button,
  Dialog,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { format_date } from "../../utils/format_date";

const ViewDetails = ({ open, setOpen, lvl, details }) => {
  const allowed = ["email", "username", "status", "created", "role"];
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);

    console.log(event.target.value);
  };

  const format_role = (item) => {
    if (item == 3) {
      return "Recruiter";
    } else {
      return "Seeker";
    }
  };

  useEffect(() => {
    details && setStatus(details.status);
  }, [details]);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Stack sx={{ padding: 2, width: 500 }}>
        <Typography
          fontSize={20}
          fontWeight={700}
          mb={2}
          sx={{ textTransform: "capitalize" }}
        >{`${lvl} User's Details`}</Typography>

        <Stack spacing={1}>
          {details !== undefined &&
            Object.keys(details).map((item, idx) => {
              return (
                allowed.includes(item) && (
                  <Stack key={idx} spacing={0.5}>
                    <Typography
                      fontSize={14}
                      fontWeight={600}
                      sx={{ textTransform: "capitalize", color: "#64748b" }}
                    >
                      {item}
                    </Typography>

                    {item == "status" ? (
                      <Select
                        size="small"
                        value={status}
                        onChange={handleChange}
                        disabled={lvl == "view"}
                      >
                        <MenuItem value={"verified"} sx={{ fontSize: 14 }}>
                          verified
                        </MenuItem>
                        <MenuItem value={"allowed"} sx={{ fontSize: 14 }}>
                          allowed
                        </MenuItem>
                        <MenuItem value={"denied"} sx={{ fontSize: 14 }}>
                          denied
                        </MenuItem>
                      </Select>
                    ) : (
                      <TextField
                        disabled={lvl == "view"}
                        placeholder="no data found --"
                        size="small"
                        value={
                          item == "role"
                            ? format_role(details[item])
                            : item == "created"
                            ? format_date(details[item])
                            : details[item]
                        }
                      />
                    )}
                  </Stack>
                )
              );
            })}
        </Stack>

        <Stack mt={4} direction="row" justifyContent="end" spacing={2}>
          {lvl == "edit" && (
            <Button
              variant="outlined"
              sx={{
                bgcolor: "#fff",
                borderColor: "rgba(0, 0, 0, 0.12)",
                color: "#000",
                textTransform: "none",
              }}
            >
              Close Dialog
            </Button>
          )}

          <Button
            variant="contained"
            disableElevation
            sx={{
              bgcolor: "#0891b2",
              color: "#fff",
              textTransform: "none",
            }}
          >
            {lvl == "view" ? "Close Dialog" : "Update Details"}
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default ViewDetails;
