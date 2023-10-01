import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function MessDetail() {
  return (
    <>
      <Card elevation={0} sx={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}>
        <Grid container height="calc(100vh - 85px)">
          <Grid
            item
            md={8}
            height="100%"
            sx={{
              borderRight: "1px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <Stack
              height="12%"
              sx={{ mb: 1, borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
            >
              <CardHeader
                title={
                  <Typography fontSize={18} fontWeight={500}>
                    UI/UX Designer
                  </Typography>
                }
                subheader={
                  <Stack direction="row" spacing={1}>
                    <Typography fontSize={12}>Active now</Typography>
                  </Stack>
                }
              />
            </Stack>

            <Stack height="76%" sx={{ overflowY: "scroll" }}>
              <CardContent>
                <Stack direction="row">
                  <Chip label="Good morning" />
                </Stack>

                <Stack direction="row" justifyContent="end">
                  <Chip label="Good morning too" color="primary" />
                </Stack>
              </CardContent>
            </Stack>

            <Stack
              height="12%"
              justifyContent="center"
              mt={1}
              sx={{ mb: 1, borderTop: "1px solid rgba(0, 0, 0, 0.12)" }}
            >
              <CardActions sx={{ mt: "-15px", padding: "0px 16px" }}>
                <TextField
                  placeholder="Type your message here"
                  size="small"
                  inputProps={{ style: { fontSize: 14, padding: "8px 16px" } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  fullWidth
                />

                <Button
                  variant="contained"
                  size="small"
                  disableElevation
                  sx={{
                    textTransform: "none",
                    fontSize: 14,
                    borderRadius: "5px",
                    marginLeft: 1,
                  }}
                >
                  Send
                </Button>
              </CardActions>
            </Stack>
          </Grid>
          <Grid
            item
            md={4}
            height="100%"
            sx={{
              display: {
                sm: "none",
                md: "block",
              },
            }}
          >
            <Stack
              height="30%"
              textAlign="center"
              sx={{
                borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                marginBottom: 2,
              }}
            >
              <Avatar
                sx={{
                  marginInline: "auto",
                  height: 48,
                  width: 48,
                  marginTop: 5,
                }}
              />
              <Typography fontSize={18} fontWeight={500} margin="16px 0 4px">
                Google, Inc.
              </Typography>
              <Typography fontSize={12} fontStyle="italic">
                A multinational technology company
              </Typography>
            </Stack>

            <Stack spacing={1} height="20%" p={2}>
              <Typography fontSize={14} pb={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                earum, possimus ad cupiditate ...
              </Typography>

              <Stack spacing={1}>
                <Button
                  variant="contained"
                  size="small"
                  disableElevation
                  sx={{ textTransform: "none" }}
                >
                  View profile
                </Button>
              </Stack>
            </Stack>

            <Stack
              p="16px 16px 0 16px"
              height="40%"
              sx={{ overflowY: "scroll" }}
            >
              <Typography fontSize={16} fontWeight={500}>
                Media and Files
              </Typography>

              <Stack
                direction="row"
                mt={1}
                sx={{
                  height: "100%",
                  borderRadius: "5px 5px 0 0",
                  padding: 2,
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                }}
              >
                <Typography fontSize={12}>
                  All files and photos will appear here.
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default MessDetail;
