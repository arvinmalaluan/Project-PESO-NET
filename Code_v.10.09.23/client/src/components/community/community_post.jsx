import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";

function CommPostTemplate() {
  return (
    <>
      <Card elevation={0} sx={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}>
        <CardHeader
          avatar={<Avatar />}
          title="Hello world"
          subheader="23 October, 2023"
          sx={{ paddingBottom: 1 }}
        />
        <CardContent sx={{ paddingTop: 1 }}>
          <Typography fontSize={14}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            dignissimos quasi sunt fugit ratione maiores, perferendis earum odit
            magni corporis excepturi tenetur, quod maxime, unde quibusdam nam
            dolore error dolor.
          </Typography>
        </CardContent>

        <CardMedia
          sx={{ height: 200 }}
          image="https://c4.wallpaperflare.com/wallpaper/479/42/490/artwork-painting-city-cityscape-skyscraper-hd-wallpaper-preview.jpg"
        />

        <CardActions sx={{ padding: "8px 16px" }}>
          <Stack direction="row" flexGrow={1}>
            <FormControlLabel
              label="Like"
              control={<Checkbox />}
              sx={{ userSelect: "none" }}
            />

            <FormControlLabel
              label="Dislike"
              control={<Checkbox />}
              sx={{ userSelect: "none", ml: 1 }}
            />
          </Stack>

          <Button
            disableElevation
            variant="contained"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Write comment
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CommPostTemplate;
