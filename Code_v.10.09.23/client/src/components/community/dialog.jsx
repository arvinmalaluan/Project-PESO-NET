import {
  Avatar,
  Stack,
  TextField,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
  IconButton,
} from "@mui/material";

import { forwardRef, useState } from "react";

import ImageIcon from "./../../assets/icons/image.svg";
import CrossIcon from "./../../assets/icons/cross-circled.svg";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, set }) {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No file selected");
  const [formData, setFormData] = useState(null);

  const handleClose = () => {
    set(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <Typography
          fontSize={18}
          fontWeight={500}
          textAlign="center"
          mt={2}
          pb={2}
          sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
        >
          Create a post
        </Typography>

        <Stack direction="row" p={2} spacing={2}>
          <Avatar />
          <Stack>
            <Typography fontSize={16} fontWeight={500}>
              Arvin Malaluan
            </Typography>
            <Typography fontSize={12}>Public</Typography>
          </Stack>
        </Stack>

        <DialogContent
          sx={{
            width: 450,
            paddingTop: 1,
            paddingBottom: 1,
            height: "350px",
            overflowY: "scroll",
          }}
        >
          <TextField
            placeholder="What is on your mind?"
            multiline
            fullWidth
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiOutlinedInput-root": {
                padding: 0,
              },
              marginBottom: 3,
            }}
            inputProps={{
              style: {
                padding: 0,
              },
            }}
          />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              position: "relative",
              paddingInline: 2,
              paddingBlock: 2,
              border: "1px solid rgba(0, 0, 0, 0.12)",
              borderRadius: "5px",
              height: "75%",
            }}
          >
            {!image ? (
              <>
                <input
                  type="file"
                  name="post-img-input"
                  id="post-img-input"
                  accept="image/*"
                  hidden
                  onChange={({ target: { files } }) => {
                    files[0] && setFileName(files[0].name);
                    files ? setImage(URL.createObjectURL(files[0])) : "";
                  }}
                />
                <label htmlFor="post-img-input" className="post-img-label">
                  <Avatar
                    src={ImageIcon}
                    sx={{
                      padding: 1,
                      bgcolor: "#e4e6eb",
                      height: 24,
                      width: 24,
                    }}
                  />
                  <Typography fontSize={16} fontWeight={500} mt={1}>
                    Add photo
                  </Typography>
                  <Typography fontSize={12}>
                    Maximum image size is 2 MB
                  </Typography>
                </label>
              </>
            ) : (
              <>
                <IconButton
                  sx={{
                    position: "absolute",
                    right: 5,
                    top: 5,
                  }}
                  onClick={() => {
                    setFileName("No file selected");
                    setImage(null);
                  }}
                >
                  <img src={CrossIcon} height={20} alt="" />
                </IconButton>
                <img
                  src={image}
                  className="selected-image"
                  alt="no image found"
                />
              </>
            )}
          </Stack>
        </DialogContent>
        <DialogActions sx={{ paddingInline: 2, paddingBlock: 2 }}>
          <Button
            onClick={handleClose}
            variant="contained"
            disableElevation
            fullWidth
            disabled={!Boolean(formData)}
          >
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
