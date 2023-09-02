import { Button, Stack, TextField, Typography } from "@mui/material";

function Resume() {
  return (
    <>
      <Stack width="100%" ml={2}>
        <Stack direction="row" justifyContent="end" spacing={2} mt={2}>
          <Button variant="outlined" color="warning">
            Cancel and discard changes
          </Button>
          <Button variant="contained" color="success">
            Save
          </Button>
        </Stack>
        <Stack>
          <Typography variant="h6">Contact Information</Typography>
          <TextField placeholder="Full name" size="small" />
          <TextField placeholder="PHone number" size="small" />
          <TextField placeholder="Email Address" size="small" />
          <TextField placeholder="Resume Objective" size="small" />
        </Stack>

        <Stack>
          <Typography variant="h6">Professional Experience</Typography>
          <TextField placeholder="Job Title" size="small" />
          <TextField placeholder="Company / Organization Name" size="small" />
          <TextField placeholder="Dates of employment" size="small" />
          <TextField placeholder="Location" size="small" />
          <TextField placeholder="Job Description" size="small" />
        </Stack>

        <Stack>
          <Typography variant="h6">Education</Typography>
          <TextField placeholder="Degree Earned" size="small" />
          <TextField placeholder="Major / Field of Study" size="small" />
          <TextField placeholder="Name of Institution" size="small" />
          <TextField placeholder="Graduation Date" size="small" />
          <TextField placeholder="Achievements" size="small" />
        </Stack>

        <Stack>
          <Typography variant="h6">Skills</Typography>
          <TextField
            placeholder="Enumerate soft and technical skills"
            size="small"
          />
        </Stack>

        <Stack>
          <Typography variant="h6">Achievements and Awards</Typography>
          <TextField
            placeholder="Enumerate achievements and awards"
            size="small"
          />
        </Stack>

        <Stack>
          <Typography variant="h6">Projects</Typography>
          <TextField placeholder="Enumerate projects" size="small" />
        </Stack>

        <Stack>
          <Typography variant="h6">Languages</Typography>
          <TextField placeholder="Enumerate languages" size="small" />
        </Stack>

        <Stack>
          <Typography variant="h6">Hobbies and Interests</Typography>
          <TextField
            placeholder="Enumerate hobbies and interests"
            size="small"
          />
        </Stack>

        <Stack>
          <Typography variant="h6">References</Typography>
          <TextField placeholder="Enumerate references" size="small" />
        </Stack>
      </Stack>
    </>
  );
}

export default Resume;
