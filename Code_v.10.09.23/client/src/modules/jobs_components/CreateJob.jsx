import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { default_data } from "./../../templates/templates";
import { createJob } from "../../context/CRUD_Operations";
import { useState } from "react";
import jwtDecode from "jwt-decode";

const CreateJob = ({ setCreate }) => {
  const [payload, setPayload] = useState({});

  const { job_post } = default_data;
  const { user_id } = jwtDecode(localStorage.getItem("token"));
  const long_fields = [
    "job_desc",
    "qualifications",
    "responsibilities",
    "benefits",
    "skills",
  ];

  const handleCreate = () => {
    const newpayload = { ...payload, status: "open", allprofile: user_id };
    createJob(newpayload)
      .then((data) => setCreate(false))
      .catch((error) => console.log(error));

    // console.log(newpayload);
  };

  const handleChange = (e, name) => {
    setPayload({ ...payload, [name]: e.target.value });
  };

  const goBack = () => {
    setCreate(false);
  };

  return (
    <Grid item md={12} height="100%">
      <Stack sx={{ bgcolor: "#fff" }}>
        <Stack bgcolor="whitesmoke" height="300px" alignItems="center">
          <Stack sx={{ pt: 10, width: "800px" }}>
            <Typography
              fontSize={12}
              fontWeight={500}
              mb={1}
              onClick={goBack}
              sx={{
                cursor: "pointer",
                width: "70px",
                "&:hover": {
                  color: "#4f46e5",
                  fontWeight: "bold",
                  textDecoration: "underline",
                },
              }}
            >
              Go Back
            </Typography>
            <Typography fontSize={32} fontWeight={500}>
              Post a job on PESO App
            </Typography>
            <Typography>
              The #1 job board for finding jobs and hiring talents.
            </Typography>
          </Stack>
        </Stack>

        <Stack alignItems="center">
          <Stack
            sx={{
              width: "800px",
              mt: "-96px",
              bgcolor: "#fff",
              borderRadius: "10px",
            }}
          >
            <Stack spacing={2} sx={{ p: "40px 40px 24px" }}>
              <Typography fontSize={24}>Tell us more about the job</Typography>
              {job_post.map((item, idx) => {
                return (
                  <Stack key={idx}>
                    <Typography fontSize={14} mb={1}>
                      {item.name}
                    </Typography>
                    <TextField
                      key={idx}
                      onChange={(e) => handleChange(e, item.name)}
                      size="small"
                      fullWidth
                      multiline
                      minRows={long_fields.includes(item.name) ? 5 : 1}
                      placeholder={item.placeholder}
                      name={item.name}
                    />
                  </Stack>
                );
              })}
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              sx={{
                paddingInline: 5,
                justifyContent: "end",
                paddingBottom: 15,
              }}
            >
              <Button
                variant="outlined"
                onClick={goBack}
                sx={{
                  borderRadius: "25px",
                  textTransform: "none",
                  fontSize: 14,
                  paddingBlock: 1,
                  paddingInline: 2,
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                disableElevation
                onClick={handleCreate}
                sx={{
                  borderRadius: "25px",
                  textTransform: "none",
                  fontSize: 14,
                  paddingBlock: 1,
                  paddingInline: 2,
                }}
              >
                Create Job Post
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default CreateJob;
