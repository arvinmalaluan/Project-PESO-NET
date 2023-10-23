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
import remove_icon from "./../../assets/icons/cross-2.svg";
import { create_post } from "../../context/GetUserData";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OpenDialog = ({ open, set, details, user_id }) => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No file selected");
  const [formData, setFormData] = useState({
    image: "",
    description: "",
    profile: "",
  });

  const handleClose = () => {
    set(false);
  };

  const handleInputChange = (event) => {
    const input_value = event.target.value;

    setFormData({
      ...formData,
      description: input_value,
      profile: user_id,
    });
  };

  const handlePost = () => {
    let newdata = new FormData();

    newdata.append("image", formData.image);
    newdata.append("profile", formData.profile);
    newdata.append("description", formData.description);

    create_post(newdata)
      .then((data) => {
        setFormData({
          profile: "",
          image: "",
          description: "",
        });

        set(false);
        setImage("");
      })
      .catch((error) => {
        console.log(error);
      });
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
          <Avatar src={details.profile} />
          <Stack>
            <Typography fontSize={16} fontWeight={500}>
              {details.name ? details.name : "loading ..."}
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
            value={formData.description}
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
            onChange={handleInputChange}
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
                  accept=".png, .jpeg, .jpg"
                  hidden
                  onChange={({ target: { files } }) => {
                    files[0] && setFileName(files[0].name);
                    files ? setImage(URL.createObjectURL(files[0])) : "";
                    files[0] && setFormData({ ...formData, image: files[0] });
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
                  size="small"
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    bgcolor: "white",
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                    "&:hover": {
                      bgcolor: "whitesmoke",
                    },
                  }}
                  onClick={() => {
                    setFileName("No file selected");
                    setImage(null);
                    setFormData({ formData, image: "" });
                  }}
                >
                  <img src={remove_icon} height={16} alt="" />
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
            onClick={handlePost}
            variant="contained"
            disableElevation
            fullWidth
            disabled={!Boolean(formData.description || formData.image)}
          >
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OpenDialog;
