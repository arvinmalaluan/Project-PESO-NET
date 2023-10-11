import { Avatar, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

import ImageIcon from "./../../../assets/icons/image.svg";
import remove_icon from "./../../../assets/icons/cross-2.svg";
import { upload } from "../../../templates/image_imports";

const Upload = ({ label }) => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No file selected");

  return (
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
        height: "100%",
      }}
    >
      {!image ? (
        <>
          <input
            type="file"
            name="post-img-input"
            id="post-img-input"
            accept=".pdf"
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
              {label}
            </Typography>
            <Typography fontSize={12}>Maximum image size is 2 MB</Typography>
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
            }}
          >
            <img src={remove_icon} alt="" />
          </IconButton>

          {/* <img src={image} className="selected-image" alt="no image found" /> */}

          <embed src={image} className="selected-image" type="" />

          <Button
            size="small"
            sx={{
              position: "absolute",
              right: 8,
              bottom: 8,
              bgcolor: "#4f46e5",
              "&:hover": {
                bgcolor: "blue",
              },
            }}
            onClick={() => {
              setFileName("No file selected");
              setImage(null);
            }}
          >
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{ padding: "4px 8px" }}
            >
              <Typography
                fontSize={14}
                sx={{ textTransform: "none", color: "#fff" }}
              >
                Done
              </Typography>

              <img
                src={upload}
                style={{
                  filter:
                    "invert(100%) sepia(0%) saturate(8%) hue-rotate(189deg) brightness(105%) contrast(102%)",
                }}
                className="icon-20x20"
                alt=""
              />
            </Stack>
          </Button>
        </>
      )}
    </Stack>
  );
};

export default Upload;
