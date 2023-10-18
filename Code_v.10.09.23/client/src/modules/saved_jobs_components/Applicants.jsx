import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  MenuItem,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { get_profile } from "../../utils/get_profile";
import { useEffect, useState } from "react";
import { getResume, rejectApplicant } from "../../context/CRUD_Operations";

import jwtDecode from "jwt-decode";
import { calendar, cross_icon, download } from "../../templates/image_imports";
import DatePicker from "./DatePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  p: 2,
  borderRadius: "5px",
};

const Applicants = ({ open, setOpen, detail }) => {
  const [showResume, setShowResume] = useState(false);
  const [resume, setResume] = useState({});
  const [holder, setHolder] = useState(detail.applicants);

  const on_close = () => {
    if (showResume) {
      setShowResume(false);
    } else {
      setOpen(false);
      setShowResume(false);
      setResume(null);
    }
  };

  const get_count = () => {
    let count = 0;

    holder.map((item) => {
      if (item.status !== "rejected") {
        count += 1;
      }
    });

    return count;
  };

  return (
    <Modal open={open} onClose={on_close}>
      <Box sx={style}>
        <Stack direction="row" justifyContent="end">
          <IconButton onClick={on_close}>
            <img src={cross_icon} alt="" />
          </IconButton>
        </Stack>

        {showResume ? (
          <ShowResume resume={resume} />
        ) : (
          <>
            <Typography fontSize={18} fontWeight={600} pl={2}>{`${
              detail.job_title
            }'s applicants (${get_count()})`}</Typography>

            {holder &&
              holder.map((item, idx) => {
                return (
                  item.status !== "rejected" && (
                    <ShowApplicants
                      key={idx}
                      no={idx}
                      detail={item}
                      holder={holder}
                      setHolder={setHolder}
                      setShow={setShowResume}
                      setResume={setResume}
                    />
                  )
                );
              })}
          </>
        )}
      </Box>
    </Modal>
  );
};

export default Applicants;

const ShowApplicants = ({ detail, holder, setHolder, setShow, setResume }) => {
  const [on_me, setOn_Me] = useState(false);
  const [profile, setProfile] = useState(null);

  const reject_applicant = () => {
    const payload = { status: "rejected" };
    const filtered = holder.filter((filter) => {
      return filter.custom_key != detail.custom_key;
    });

    rejectApplicant(detail.custom_key, payload)
      .then((data) => {
        console.log(data);
        setHolder(filtered);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = () => {
    setShow(true);
    setResume({
      name: profile.name,
      custom_key: detail.custom_key,
      sched: detail.sched,
    });
  };

  useEffect(() => {
    get_profile(detail.applicant)
      .then((data) => setProfile(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <MenuItem
      sx={{ mt: 1, borderRadius: "5px" }}
      onMouseEnter={() => setOn_Me(true)}
      onMouseLeave={() => setOn_Me(false)}
      onClick={handleClick}
    >
      <Stack direction="row" spacing={2} width="100%">
        <Avatar />
        <Stack width="100%">
          <Stack
            direction="row"
            width="100%"
            alignItems="center"
            spacing={1}
            sx={{ position: "relative" }}
          >
            <Typography flexGrow={1}>
              {profile ? profile.name : "loading"}
            </Typography>
            {on_me ? (
              <Button
                variant="contained"
                disableElevation
                onClick={reject_applicant}
                sx={{
                  bgcolor: "red",
                  textTransform: "none",
                  fontSize: 14,
                  position: "absolute",
                  right: "0",
                  top: "4px",
                  paddingBlock: 0.5,
                }}
              >
                Reject
              </Button>
            ) : (
              <Chip
                label={
                  <Typography fontSize={10} fontWeight={600}>
                    80% compatibility
                  </Typography>
                }
                sx={{
                  borderRadius: "5px",
                  height: "auto",
                  paddingBlock: "4px",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  background: "#fff",
                }}
              />
            )}
          </Stack>
          <Typography fontSize={10}>( click to view )</Typography>
        </Stack>
      </Stack>
    </MenuItem>
  );
};

const ShowResume = ({ resume }) => {
  const [payload, setPayload] = useState(resume);

  const styles = {
    width: "100%",
    textTransform: "none",
    fontSize: "14",
  };

  const handleSet = () => {
    const newpayload = {
      custom_key: resume.custom_key,
      sched: payload.sched,
    };

    rejectApplicant(payload.custom_key, newpayload)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Stack>
      <Stack
        sx={{
          height: "350px",
          paddingBlock: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DatePicker setPayload={setPayload} payload={payload} />
      </Stack>

      <Stack
        sx={{ padding: 1, bgcolor: "whitesmoke", mb: 2, borderRadius: "5px" }}
      >
        <Typography fontSize={14}>
          <i>
            Set Interview Date and Time for Applicant <b>{` ${resume.name}`}</b>
          </i>
        </Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button variant="outlined" disableElevation sx={styles}>
          Download Resume
        </Button>

        <Button
          variant="contained"
          onClick={handleSet}
          disableElevation
          sx={styles}
        >
          Set Interview
        </Button>
      </Stack>
    </Stack>
  );
};
