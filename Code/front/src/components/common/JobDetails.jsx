import {
  BookmarkBorderOutlined,
  LocationOnOutlined,
  Share,
} from "@mui/icons-material";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  IconButton,
  List,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { jobInfoTitles } from "../../utils/constants";

function JobDetails() {
  const CardContentDetails = ({ title, type }) => {
    const array = [1, 2, 3, 4, 5];
    return (
      <>
        <Typography variant="h6" mb={1} mt={2} fontWeight="500">
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            textAlign: "justify",
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          At XYZ Company, we're seeking a motivated and dedicated individual to
          join our team as a Marketing Coordinator. In this role, you will
          collaborate with cross-functional teams to execute marketing
          campaigns, manage social media accounts, and analyze campaign
          performance metrics. The ideal candidate is detail-oriented, possesses
          excellent communication skills, and has a passion for creative
          problem-solving. This is a fantastic opportunity for someone looking
          to contribute to a dynamic marketing environment and grow their skills
          in a collaborative setting. Join us in making a meaningful impact in
          the world of marketing.
        </Typography>
      </>
    );
  };

  const ChipContent = ({ label, content }) => {
    return (
      <>
        <Chip
          label={
            <>
              <Typography variant="body1" fontSize={12} mb={0.2}>
                {label}
              </Typography>
              <Typography variant="body1" fontWeight={500}>
                {content}
              </Typography>
            </>
          }
          sx={{
            p: 1,
            height: "auto",
            textAlign: "center",
            bgcolor: "whitesmoke",
            borderRadius: "10px",
          }}
        />
      </>
    );
  };

  return (
    <Card
      sx={{
        height: "calc(100vh - 5%)",
      }}
    >
      <Grid container height="100%">
        <Grid item md={8.5} height="100%">
          <CardHeader
            avatar={
              <Avatar
                variant="rounded"
                style={{
                  backgroundColor: "transparent",
                  height: "72px",
                  width: "72px",
                  marginRight: 2,
                }}
                src="https://i.redd.it/bm9vgkgnnzfa1.jpg"
              />
            }
            title={
              <Typography variant="h4" mb={0.5} fontWeight="400">
                Ui/Ux Designer
              </Typography>
            }
            subheader={
              <>
                <Stack direction="row" alignItems="center">
                  <Typography variant="body2" color="#000" fontWeight="500">
                    Avatar, Inc.
                  </Typography>
                  <VerifiedIcon
                    style={{
                      color: "#00acee",
                      height: "16px",
                      width: "16px",
                      marginLeft: "4px",
                      marginRight: "8px",
                    }}
                  />
                  {"• 216 applied for this"}
                </Stack>
              </>
            }
            action={
              <>
                <IconButton>
                  <BookmarkBorderOutlined />
                </IconButton>
                <IconButton>
                  <Share />
                </IconButton>
              </>
            }
            sx={{
              height: "20%",
              borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
              pl: 3,
            }}
          />
          <CardContent
            sx={{
              height: "70%",
              padding: "0 16px  8px 24px ",
              overflow: "hidden",
              overflowY: "scroll",
            }}
          >
            <Stack direction="row" spacing={2} mt={2}>
              <ChipContent label="Employment Type" content="Full time" />
              <ChipContent
                label="Required Experience"
                content="( Not Specified )"
              />
              <ChipContent
                label="Required Education"
                content="College Graduate"
              />
            </Stack>
            {jobInfoTitles.map((items, idx) => {
              return <CardContentDetails key={idx} type="p" title={items} />;
            })}
          </CardContent>
          <Stack
            direction="row"
            height="10%"
            alignItems="center"
            justifyContent="space-between"
            padding="0 16px"
            sx={{
              borderTop: "1px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <Typography
              variant="body2"
              fontWeight={300}
              color="rgba(0, 0, 0, 0.7)"
            >
              Posted 8h ago
            </Typography>

            <Button
              variant="contained"
              disableElevation
              sx={{ borderRadius: "5px", textTransform: "none" }}
            >
              Submit Application
            </Button>
          </Stack>
        </Grid>
        <Grid
          item
          md={3.5}
          height="100%"
          sx={{
            borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <Stack height="65%" p={2} justifyContent="space-between">
            <Stack>
              <CardHeader
                sx={{ padding: 0, mb: 2 }}
                avatar={
                  <Avatar
                    variant="rounded"
                    style={{
                      backgroundColor: "transparent",
                      height: "56px",
                      width: "56px",
                      marginRight: 2,
                    }}
                    src="https://i.redd.it/bm9vgkgnnzfa1.jpg"
                  />
                }
                title={
                  <>
                    <Stack direction="row" alignItems="center" mb={0.5}>
                      <Typography variant="h6" fontWeight={500}>
                        Avatar, Inc.
                      </Typography>
                      <VerifiedIcon
                        style={{
                          height: 16,
                          width: 16,
                          color: "#00acee",
                          marginLeft: "8px",
                        }}
                      />
                    </Stack>
                  </>
                }
                subheader="Destroyer of galaxies"
              />
              <Stack spacing={1} mt={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocationOnOutlined />
                  <Typography
                    fontSize={14}
                    fontWeight={300}
                    color="rgba(0, 0, 0, 0.7)"
                  >
                    Simlong, Batangas City
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocationOnOutlined />
                  <Typography
                    fontSize={14}
                    fontWeight={300}
                    color="rgba(0, 0, 0, 0.7)"
                  >
                    Simlong, Batangas City
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocationOnOutlined />
                  <Typography
                    fontSize={14}
                    fontWeight={300}
                    color="rgba(0, 0, 0, 0.7)"
                  >
                    Simlong, Batangas City
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                display: "-webkit-box",
                WebkitLineClamp: "4",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur illum nisi pariatur fuga dicta provident quos?
              Delectus, nostrum! Esse voluptas aut amet maiores est, quidem
              accusamus quia consequuntur similique nihil.
            </Typography>

            <Stack spacing={1} justifyContent="end">
              <Button
                disableElevation
                sx={{ textTransform: "none" }}
                variant="contained"
              >
                Message
              </Button>
              <Button sx={{ textTransform: "none" }} variant="outlined">
                View Site
              </Button>
            </Stack>
          </Stack>
          <Stack
            height="35%"
            sx={{
              padding: "8px 16px",
            }}
          >
            <Stack direction="row" alignItems="center" mb={1} mt={2}>
              <Typography fontSize={20} fontWeight={500} flexGrow={1}>
                Other vacancies
              </Typography>
              <Button size="small" sx={{ textTransform: "none" }}>
                View all
              </Button>
            </Stack>

            <List>
              <ListItemButton
                disableGutters
                sx={{
                  borderTop: "1px solid rgba(0, 0, 0, 0.12)",
                }}
              >
                <Stack width="100%">
                  <Stack direction="row" width="100%">
                    <Typography fontWeight={500} flexGrow={1}>
                      Executive Business
                    </Typography>
                    <Typography fontSize={12} color="rgba(0, 0, 0, 0.5)">
                      Onsite
                    </Typography>
                  </Stack>

                  <Stack direction="row" width="100%" mt={0.8}>
                    <Typography
                      fontSize={12}
                      flexGrow={1}
                      color="rgba(0, 0, 0, 0.5)"
                    >
                      Posted 8h ago
                    </Typography>
                    <Typography fontSize={12} color="rgba(0, 0, 0, 0.5)">
                      Permanent Work
                    </Typography>
                  </Stack>
                </Stack>
              </ListItemButton>

              <ListItemButton
                disableGutters
                sx={{
                  borderTop: "1px solid rgba(0, 0, 0, 0.12)",
                }}
              >
                <Stack width="100%">
                  <Stack direction="row" width="100%">
                    <Typography fontWeight={500} flexGrow={1}>
                      Executive Business
                    </Typography>
                    <Typography fontSize={12} color="rgba(0, 0, 0, 0.5)">
                      Onsite
                    </Typography>
                  </Stack>

                  <Stack direction="row" width="100%" mt={0.8}>
                    <Typography
                      fontSize={12}
                      flexGrow={1}
                      color="rgba(0, 0, 0, 0.5)"
                    >
                      Posted 8h ago
                    </Typography>
                    <Typography fontSize={12} color="rgba(0, 0, 0, 0.5)">
                      Permanent Work
                    </Typography>
                  </Stack>
                </Stack>
              </ListItemButton>
            </List>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}

export default JobDetails;
